const connection = require('../database/connection');
const crypto = require('crypto'); //vai ajudar a criar string aleatoria para id.

module.exports = {
    async index (request, response){
        const ongs =  await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(resquest, response){
        const { name, email, whatsapp, city, uf } = resquest.body;

        const id = crypto.randomBytes(4).toString('HEX');

     await connection('ongs').insert({
         id,
         name,
         email,
         whatsapp,
         city,
         uf,
        })

        return response.json({ id }); //objeto representado atraves de chaves
    }
};