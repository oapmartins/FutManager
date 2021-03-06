'use strict';

module.exports = {

    async avaliar(ctx) {
        const { nota } = ctx.request.body;
        const { reserva_id } = ctx.params;

        // Encontra a avaliação corresponde a reserva
        let avaliacao = await strapi.services.avaliacao.findOne({ reserva: reserva_id })
        // Reserva ainda não foi avaliada?
        if (avaliacao == null) {
            let data = {
                reserva: reserva_id,
                nota: nota
            };

            avaliacao = await strapi.services.avaliacao.create(data);
        }
        else {
            avaliacao = await strapi.services.avaliacao.update({ id: avaliacao.id },
                {
                    reserva: reserva_id,
                    nota: nota
                });
        }

        // altera status para concluído(usar enum para tornar mais descritivo os status)
        await strapi.services.reserva.update({ id: reserva_id },
            {
                status: 5
            })

        ctx.send({
            ok: avaliacao != null,
        });
    },

    async find(ctx) {
        const knex = strapi.connections.default;

        let reservas = await knex.raw(`
            SELECT 
                r.id, 
                r.status,
                CASE
                    WHEN status = 1 THEN 'Pré-reserva realizada'
                    WHEN status = 2 THEN 'Pré-reserva paga'
                    WHEN status = 3 THEN 'Avaliação disponível'
                    WHEN status = 5 THEN 'Reserva finalizada'                    
                    ELSE 'Não definido'
                END AS descricao_status,
                h.id as id_horario, 
                r.dia as dia, 
                h.horario_inicio, 
                h.horario_final, 
                q.id as id_quadra, 
                q.razao_social as nome_quadra, 
                e.logradouro || ', ' || e.numero || ', ' || e.bairro || ', ' || e.cidade || '/' || e.estado AS endereco_quadra 
            FROM reservas r 
            JOIN horarios h ON 
                h.id = r.horario 
            JOIN quadras q ON
                q.id = h.quadra 
            JOIN enderecos e ON
                e.Id = q.endereco
            ORDER BY r.dia`);

        reservas.forEach(reserva => {
            let data_fim_reserva = new Date(reserva.dia + ' ' + reserva.horario_final);
            
            if (reserva.status == 2) {
                // A data da reserva já ocorreu?
                if (data_fim_reserva <= Date.now()) {
                    reserva.status = 3;
                    reserva.descricao_status = 'Pendente avaliação';
                }
                else {
                    reserva.status = 4;
                    reserva.descricao_status = 'Aguardando chegar a data da reserva';

                }
            }
        });

        return reservas;
    },

    async confirmar(ctx) {
        const { id } = ctx.params;

        const knex = strapi.connections.default;
        await knex.raw(`UPDATE reservas SET status = 2 WHERE id = ${id}`);

        ctx.send({
            ok: true,
        });
    },

    async horarios_disponiveis(ctx) {
        let filtro = ctx.query;
        const knex = strapi.connections.default;

        let query_quadra = `SELECT 
                        q.id AS id_quadra,
                        q.razao_social, 
                        e.logradouro,
                        5 AS nota
                    FROM quadras q 
                    JOIN enderecos e ON
                        q.endereco = e.id
                    WHERE 
                        e.estado = '${filtro.estado}'
                        AND e.cidade = '${filtro.cidade}'`;

        let quadras_regiao = await knex.raw(query_quadra);
        let horarios_quadras = [];

        for (let index = 0; index < quadras_regiao.length; index++) {
            let query_avaliacao = `SELECT 
                                        AVG(a2.nota) AS nota
                                    FROM quadras q 
                                    JOIN horarios h ON
                                        h.quadra = q.id
                                    JOIN reservas r ON
                                        h.id = r.horario 
                                    JOIN avaliacoes a2 ON
                                        a2.id = r.avaliacao 
                                    WHERE 
                                        q.id = ${quadras_regiao[index].id_quadra}`;

            let nota = await knex.raw(query_avaliacao);

            if (nota[0].nota == null) {
                quadras_regiao[index].nota = 5;
            }
            else {
                quadras_regiao[index].nota = nota[0].nota;
            }
            

            let query_horario = `SELECT 
                                    h.id AS id_horario, 
                                    h.dia_abertura,
                                    h.horario_inicio,
                                    h.horario_final,
                                    h.quadra AS id_quadra
                                FROM horarios h 
                                WHERE 
                                    h.quadra = ${quadras_regiao[index].id_quadra}`;

            let horario_quadra = await knex.raw(query_horario);

            horarios_quadras = horarios_quadras.concat(horario_quadra);   
        }

        let data_inicio = new Date(filtro.data_inicio);
        let data_final = new Date(filtro.data_final);
        let agendas = [];
        // Pecorre todas as dias compreendidas entre a data de início e fim
        // gerando, em memória, as agendas. Certamente não é a melhor solução.
        while (data_inicio <= data_final) {
            for (let index = 0; index < horarios_quadras.length; index++) {
                // Horário disponível é para o mesmo dia da semana do filtro?
                if (data_inicio.getDay() == horarios_quadras[index].dia_abertura) {
                    // Horário disponível compreende o horário do filtro?
                    if (filtro.horario_inicio <= horarios_quadras[index].horario_inicio
                        && filtro.horario_final >= horarios_quadras[index].horario_final) {
                        
                            let detalhe_quadra = quadras_regiao.find(x => x.id_quadra == horarios_quadras[index].id_quadra);
                        
                            agendas.push(
                            {
                                dia_disponivel: new Date(data_inicio),
                                id_quadra: horarios_quadras[index].id_quadra,
                                nome_quadra: detalhe_quadra.razao_social,
                                nota: detalhe_quadra.nota,
                                id_horario: horarios_quadras[index].id_horario,
                                horario_inicio: horarios_quadras[index].horario_inicio,
                                horario_final: horarios_quadras[index].horario_final
                            }
                        );
                    }
                }
            }
            // Incrementa em um dia a data de início
            data_inicio.setDate(data_inicio.getDate() + 1);
        }

        return ctx.send(agendas);
    },

    async reservas_por_mes(ctx) {
        const knex = strapi.connections.default;
        
        return await knex.raw(`
            SELECT 	DISTINCT 
            strftime('%Y', date(r.dia)) Ano,
            strftime('%m', r.dia) Mes,
            COUNT(*) OVER(PARTITION BY strftime('%Y', r.dia), strftime('%m', r.dia)) Volume
            FROM reservas r 
            JOIN avaliacoes a ON
                a.reserva = r.id `);
    },

};
