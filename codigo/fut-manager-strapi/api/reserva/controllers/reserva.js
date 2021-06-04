'use strict';

module.exports = {

    async avaliar(ctx) {
        const { nota } = ctx.request.body;
        const { reserva_id } = ctx.params;

        // Encontra a avaliação corresponde a reserva
        let avaliacao = await strapi.services.avaliacao.findOne({ reserva: reserva_id })

        // Reserva ainda não foi avaliada?
        if (avaliacao == null) {
            avaliacao = await strapi.services.avaliacao.create(
                {
                    reserva: reserva_id,
                    nota: nota
                });
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
                status: 7
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
                    WHEN status = 0 THEN 'Pré-reserva realizada'
                    WHEN status = 1 THEN 'Gerando boleto'
                    WHEN status = 2 THEN 'Pendente pagamento'
                    WHEN status = 3 THEN 'Pagamento confirmado'
                    WHEN status = 4 THEN 'Pendente confirmação do centro esportivo'
                    WHEN status = 5 THEN 'Reserva confirmada'
                    WHEN status = 6 THEN 'Pendente avaliação'
                    WHEN status = 7 THEN 'Reserva concluída'
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
            // A data da reserva já ocorreu?
            if (reserva.status != 7 && data_fim_reserva <= Date.now()) {
                reserva.status = 6;
                reserva.descricao_status = 'Pendente avaliação';
            }
        });

        return reservas;
    },

    async confirmar(ctx) {
        const { id } = ctx.params;
        const { perfil } = ctx.params;

        const knex = strapi.connections.default;
        await knex.raw(`UPDATE reservas SET status = ${perfil == "cliente" ? 4 : 5} WHERE id = ${id}`);
        // enviar email para gestor

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
            quadras_regiao[index].nota = nota[0].nota;

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

        // const horarios = await knex('quadras')
        //     .join('enderecos', 'quadras.endereco', 'enderecos.id')
        //     .join('horarios', 'horarios.quadra', 'quadras.id')
        //     .where('enderecos.estado', filtro.estado)
        //     .where('enderecos.cidade', filtro.cidade)
        //     .select('enderecos.logradouro')
        //     .select('horarios.id AS id_horario')
        //     .select('horarios.dia_abertura')
        //     .select('horarios.horario_inicio')
        //     .select('horarios.horario_final')
        //     .select('quadras.id AS id_quadra')
        //     .select('quadras.razao_social');

        let data_inicio = new Date(filtro.data_inicio);
        let data_final = new Date(filtro.data_final);
        let agendas = [];
        // Pecorre todas as dias compreendidas entre a data de início e fim
        // gerando, em memória, as agendas. Certamente não é a melhor solução.
        // while (data_inicio <= data_final) {
        //     for (let index = 0; index < horarios.length; index++) {
        //         // Horário disponível é para o mesmo dia da semana do filtro?
        //         if (data_inicio.getDay() == horarios[index].dia_abertura) {
        //             // Horário disponível compreende o horário do filtro?
        //             if (filtro.horario_inicio <= horarios[index].horario_inicio
        //                 && filtro.horario_final >= horarios[index].horario_final) {
        //                 agendas.push(
        //                     {
        //                         dia_disponivel: new Date(data_inicio),
        //                         id_quadra: horarios[index].id_quadra,
        //                         nome_quadra: horarios[index].razao_social,
        //                         id_horario: horarios[index].id_horario,
        //                         horario_inicio: horarios[index].horario_inicio,
        //                         horario_final: horarios[index].horario_final
        //                     }
        //                 );
        //             }
        //         }
        //     }
        //     // Incrementa em um dia a data de início
        //     data_inicio.setDate(data_inicio.getDate() + 1);
        // }

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
};
