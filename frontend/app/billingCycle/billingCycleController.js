(function () {
    angular.module('jsbFinancas').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        'tabs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs, tabs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycle' //url para  requisições

        //metodo da lista
        vm.refresh = function () {
            $http.get(url).then(function (response) {
                vm.billingCycle = {} //limpa o objeto
                vm.billingCycles = response.data
                tabs.show(vm, { tabList: true, tabCreate: true })
               
            })
        }
        //metodo do cadastro
        vm.create = function () {
            $http.post(url, vm.billingCycle).then(function (response) { //se for cadastrado corretamente na base do mongo o calback passa uma resposta 
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso')
            }).catch(function (response) {
                msgs.addError(response.data.errors)
            })
        }
       
        vm.showTabUpdate = function (billingCycle) {
           
            vm.billingCycle = billingCycle // linha q vai ser alterada
            tabs.show(vm, { tabUpdate: true })
        }
        vm.showTabDelete = function (billingCycle) {
            vm.billingCycle = billingCycle // linha q vai ser alterada
            tabs.show(vm, { tabDelete: true })
        }

        vm.refresh()
    }
})()