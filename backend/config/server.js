const port = 3003

const bodyParser =require('body-parser') //body-parser é um midware responsavel por tratar e converte as requisiçoes recebidas e enviadas em json
const express=require('express') // express faz o controle de fuxo de requisiçoes
const server = express()

server.use(bodyParser.urlencoded({extended:true})) // extended:true ativa o body parser a tratar qualquer foma de requisiçao enviada
server.use(bodyParser.json()) //faz um tratamento expecifico p json

server.listen(port, function(){
    console.log(`Sevidor ligado na porta ${port}.`)// servidor escutando a porta
})
