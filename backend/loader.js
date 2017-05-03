const server = require('./config/server') //intancia o servidor e disponibiliza uma variavel server
require('./config/database') //instancia o banco
require('./config/routes')(server) //instancia as rotas e usa server


//eh nescessario startar o banco e o servidor dentro do backend