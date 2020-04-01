const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //se quiser voltar a pasta seriam ..

const app = express();

app.use(cors());
app.use(express.json()); //express vai converter json em js
app.use(routes);

//rota/recurso

/*metodos http : 
GET: buscar/listar informacao no backend
POST: criar informacao no backend
PUT: alterar inf. no BE
DELETE: deletar inf. no BE*/
                
/*tipos de parametros:
Query Params: parametros nomeados enviados na rota apos "?", serve para paginaçao(so da pagina tal - ?page=2&nome=Joana&idade=19), 
              filtrar exemplo: ?name=Diego -> esta buscando quem tem Diego no nome

Route Params: Parametros para utilizar recursos (ex: /users/:id - no insomnia /users/1).

Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/ 

/* Configurar banco de dados:
Driver: pacote oficial de banco e dados para node. ex: SELECT * FROM users
Query builder: table('users').select('*').where()
 */


app.listen(3333); //abrir posrta 3333 no local host;