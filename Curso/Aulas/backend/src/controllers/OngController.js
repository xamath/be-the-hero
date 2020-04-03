const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

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

    async indexincidents(request, response) {
        const incidents = await connection('incidents').select('*');
    
        return response.json(incidents);
    },
    
    async createincidents(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    }


};