const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index( r) {
        const ongs = await connection('ongs').select('*');
    
        return r.json(ongs);
    },
    
    async create(q, response) {

        console.log(q.body)
        const {name, email, whatsapp, city, uf} = q.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
         id,
         name,
         email,
         whatsapp,
         city,
         uf
        })
    
        return response.json ({ id });  
    },

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    



};