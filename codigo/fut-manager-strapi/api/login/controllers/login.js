'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {

    async authenticate(ctx) {
        let { email, senha, tipo } = ctx.request.body;

        if(tipo == 'cliente'){
            var entity = sanitizeEntity(await strapi.services.cliente.find({ email }), { model: strapi.models.cliente });
        }
        if(tipo == 'gestor'){
            var entity = sanitizeEntity(await strapi.services.cliente.find({ email }), { model: strapi.models.cliente });
        }

        console.log(entity)


        if(entity.length > 0){

            entity = entity[0];
            return {
                id: entity.id,
                nome: entity.nome,
                isAuthenticated: entity.email == email && entity.senha == senha
            };
        }

        ctx.response.status = 404;

        return;
    }
};
