const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

function getSummary(req, res){
    BillingCycle.aggregate({ 
        $project:{credit:{$sum:"$credits.value"},debt:{$sum:"$debts.value"}} //extrai de billingCycleSchema e  soma o array credits.value e $debts.valuev e cria um objeto
    },{
        $group:{_id:null, credit:{$sum:"$credit"},debt:{$sum:"$debt"}} //agrupa todos os creditos e debitos de todos os ducumentos em um unico objeto
    },{
        $project:{_id:0, credit: 1,debt: 1} // nao mostrar id 
    }, function(error, result){
        if(error){
            res.status(500).json({errors:[error]})
        } else{
            res.json(_.defaults(result[0],{credit: 0, debt: 0})) // se result de credito for zero nao sera valor undefined sera zero
        }
    })
}

module.exports={getSummary}