'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async pay(ctx){
        const { request } = ctx;
        const { body } = request;
        const { tipo, reserva } = body;
        var boletoEntity;

        if(tipo === 'boleto'){
            
            boletoEntity = await strapi.query('boleto').create({
                valor: body.valor,
                data_vencimento: this.getDataVencimento()
            }).then(result => {
                return result;
            }).catch(error => console.log(error))
        }

        var result = strapi.query('pagamento').create({
            valor: body.valor,
            pago: body.pago,
            tipo: body.tipo,
            boleto: typeof boletoEntity != 'undefined'? boletoEntity.id : null,
            reserva: body.reserva
        }).then(result => {
            strapi.query('reserva').update({id: reserva},{
                pagamento: result.id
            }).then(result => console.log(result)).catch(error => console.log(error));
            return result;
        }).catch(error => console.log(error))

        return result;

    },

    getDataVencimento(){
        let today = new Date();
        let dataVencimento = new Date(today.getFullYear(),today.getMonth() < 12? today.getMonth()+1 : 1, today.getDate()); 

        return dataVencimento.toISOString();
    }
};
