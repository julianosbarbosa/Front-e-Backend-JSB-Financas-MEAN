angular.module('jsbFinancas').config([
    '$stateProvider',
    '$urlRouterProvider',  //sao objetos de configuração dentro de ui routes
    function ($stateProvider, $urlRouterProvider) { //o ultimo elmento sempre deve ser uma função , é a forma que o angular faz a injeção de dependencias
        $stateProvider.state('dashboard', { //cuida do estado 
            url: "/dashboard", //quado for chamado ele muda url /dashboard ele carrega na view dashboard/dashboard.html
            templateUrl: "dashboard/dashboard.html"
        }).state('billingCycle',{
            url: "/billingCycles", //quado for chamado ele muda url /dashboard ele carrega na view dashboard/dashboard.html
            templateUrl: "billingCycle/tabs.html"
        })

        $urlRouterProvider.otherwise('/dashboard') // caso url difrente ele carrega o estado /dashboard
    }
])

