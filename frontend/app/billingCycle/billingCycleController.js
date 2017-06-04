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
                vm.billingCycle = { credits: [{}], debts: [{}] } //limpa o objeto
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
        vm.update = function () {
            const updateUrl = `${url}/${vm.billingCycle._id}`
            $http.put(updateUrl, vm.billingCycle).then(function (response) {
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function (data) {
                msgs.addError(data.errors)
            })
        }

        vm.delete = function () {
            const deleteUrl = `${url}/${vm.billingCycle._id}`
            $http.delete(deleteUrl, vm.billingCycle).then(function (response) {
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function (data) {
                msgs.addError(data.errors)
            })
        }

        vm.addCredit = function (index) {
            vm.billingCycle.credits.splice(index + 1, 0, {})
        }

        vm.cloneCredit = function (index, { name, value }) {
            vm.billingCycle.credits.splice(index + 1, 0, { name, value })

        }

        vm.deleteCredit = function (index) {
            if (vm.billingCycle.credits.length > 1) {
                vm.billingCycle.credits.splice(index, 1)
            }
        }

        vm.addDebt = function (index) {
            vm.billingCycle.debts.splice(index + 1, 0, {})
        }

        vm.cloneDebt = function (index, { name, value, status }) {
            vm.billingCycle.debts.splice(index + 1, 0, { name, value, status })

        }

        vm.deleteDebt = function (index) {
            if (vm.billingCycle.debts.length > 1) {
                vm.billingCycle.debts.splice(index, 1)
            }
        }

        vm.refresh()
    }
})()