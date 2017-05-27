module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*') //aceita requisição de qualquer origem
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'), //aceita requisição de todos os tipos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') //headers q precisam ser suportados pela api
    next() //manda  o meddleware  para o server
}