const BillingCycle = require('./billingCycle')
//ataves do nodereful ele confura os metodos q vou usar em minha api
BillingCycle.methods(['get','post', 'put', 'delete']) 
BillingCycle.updateOptions({new:true, runValidators: true}) //faz atualização e validação da requsição assim que é alterado

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