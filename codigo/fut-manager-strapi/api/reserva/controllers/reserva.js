'use strict';

module.exports = {

    async find(ctx) {
        const knex = strapi.connections.default;
        return await knex.raw(`
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
                e.Id = q.endereco`);
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

    async horariosDisponiveis(ctx) {
        let filtro = ctx.query;

        const knex = strapi.connections.default;
        const horarios = await knex('quadras')
            .join('enderecos', 'quadras.endereco', 'enderecos.id')
            .join('horarios', 'horarios.quadra', 'quadras.id')
            .where('enderecos.estado', filtro.estado)
            .where('enderecos.cidade', filtro.cidade)
            .select('enderecos.logradouro')
            .select('horarios.id AS id_horario')
            .select('horarios.dia_abertura')
            .select('horarios.horario_inicio')
            .select('horarios.horario_final')
            .select('quadras.id AS id_quadra')
            .select('quadras.razao_social');

        let data_inicio = new Date(filtro.data_inicio);
        let data_final = new Date(filtro.data_final);
        let agendas = [];
        // Pecorre todas as dias compreendidas entre a data de início e fim
        // gerando, em memória, as agendas. Certamente não é a melhor solução.
        while (data_inicio <= data_final) {
            for (let index = 0; index < horarios.length; index++) {
                // Horário disponível é para o mesmo dia da semana do filtro?
                if (data_inicio.getDay() == horarios[index].dia_abertura) {
                    // Horário disponível compreende o horário do filtro?
                    if (filtro.horario_inicio <= horarios[index].horario_inicio
                        && filtro.horario_final >= horarios[index].horario_final) {
                        agendas.push(
                            {
                                dia_disponivel: new Date(data_inicio),
                                id_quadra: horarios[index].id_quadra,
                                nome_quadra: horarios[index].razao_social,
                                id_horario: horarios[index].id_horario,
                                horario_inicio: horarios[index].horario_inicio,
                                horario_final: horarios[index].horario_final
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
