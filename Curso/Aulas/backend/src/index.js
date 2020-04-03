const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/executar uma informacão do back-end
  * Post: Criar uma informação no back-end
  * Put: Alterar uma informação no back-end
  * DELETE: Deletar uma infomação no back-end
  */

  /**
   * Tipos de Parametros:
   *
   *  Query Params: Parametros nomeados enviado na rota após "?" (Filtros, paginação)
   *  Route Params: Parametros utilizados para identificar recursos "id no /users"
   *  Request  Body: Corpo da requisiçao, utilizaddo para criar ou alterar recursos
   */

   /**
    * SQL:"MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server" (linguagem universal)
    * NoSQL: MongoDB, CouchDB , etc (linguagem própria)
    * 
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */



app.listen(3333);
