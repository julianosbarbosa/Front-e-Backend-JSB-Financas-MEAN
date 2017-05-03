const restful = require('node-restful') //node-restful facilita expor a api com integraçao express e mongoose
const mongoose = restful.mongoose

//Mapeamento do banco e aplicaçao
const creditSchema = new mongoose.Schema({
    name:{type: String, require: true},
    value:{type: Number, min: 0, require: true }
})

const debtSchema = new mongoose.Schema({
    name:{type: String, require: true},
    value:{type: Number, min: 0, require: true },
    status:{type: String, require:false, uppercase: true,
        enum:['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name:{type: String, require: true},
    month:{type: Number, min:1, max:12, require:true},
    year:{type: Number, min:1970, max:2100, require:true},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)