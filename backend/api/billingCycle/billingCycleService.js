const _ = require('lodash')
const BillingCycle = require('./billingCycle')

//ataves do nodereful ele confura os metodos q vou usar em minha api
BillingCycle.methods(['get','post', 'put', 'delete']) 
BillingCycle.updateOptions({new:true, runValidators: true}) //faz atualização e validação da requsição assim que é alterado

BillingCycle.after('post', sendErrorOrNext).after('put', sendErrorOrNext) // intercepta a requisição e chama a função medleware sendErrorOrNext

function sendErrorOrNext(req, res, next){
    const bundle=res.locals.bundle //objeto q captura erros

        if(bundle.errors){
            var errors=parseErrors(bundle.errors)
            res.status(500).json({errors})
        }else{
            next()
        }
    function parseErrors(nodeRestfulErrors){  //metodo que parceia os erros
        const errors=[]
        _.forIn(nodeRestfulErrors, error => errors.push(error.message))
        return errors
    }
}

BillingCycle.route('count', function(req, res, next){
    BillingCycle.count(function(error, value){ // conta quantos registros q tem na colection 
        if(error){
            res.status(500).json({errors:[error]})
        } else{
            res.json({value})
        }
    })
})

module.exports= BillingCycle