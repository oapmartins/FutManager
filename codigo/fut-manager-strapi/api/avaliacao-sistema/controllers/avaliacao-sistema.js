'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async createWithUser(ctx){
        const { request } = ctx;
        const { body } = request;

        return strapi.query('avaliacao-sistema').create({
            nota: body.nota,
            observacao: body.observacao,
            cliente: body.cliente
        }).then(result => {
            return result;
        }).catch(error => console.log(error))

    }
};
