const BillingCycle = require('./billingCycle')
//ataves do nodereful ele confura os metodos q vou usar em minha api
BillingCycle.methods(['get','post', 'put', 'delete']) 
BillingCycle.updateOptions({new:true, runValidators: true}) //faz atualização e validação da requsição assim que é alterado
module.exports= BillingCycle