const express =require('express')

module.exports= function (server){ //server esta vindo de loader.js
    const router = express.Router()
    server.use('/api', router) //tudo que vier de /api na url vai ser tratado no meddware router

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router,'/billingCycle') // a url fica /api//billingCycle que faz 'get','post', 'put', 'delete'
}

