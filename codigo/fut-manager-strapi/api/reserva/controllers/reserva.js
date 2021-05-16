'use strict';

module.exports = {

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

        console.log(filtro);

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
                                dia_disponivel: data_inicio,
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
        console.log(data_inicio);
        console.log(data_final);

        return ctx.send(agendas);
    },
};
