angular.module('jsbFinancas').component('valueBox', {
//bindings sao as entradas
    bindings: {
        grid: '@', // @ pq é um componente string 
        colorClass: '@',
        value: '@',
        text: '@',
        iconClass: '@',
    },
//controller sao os processamentos
    controller: [
        'gridSystem', //gridSystem vem do meu factory
        function (gridSystem) {
            this.$onInit= function(){ //onInit serve para iniciar a função somente se os bindings estiverem inicializados
                this.gridClasses = gridSystem.toCssClasses(this.grid)  // passa a variavle tranformada no factory p dentro do template
            }
        }
    ],
//templates sao as saidas
    template: ` 
    <div class="{{ $ctrl.gridClasses }}">
        <div class="small-box {{ $ctrl.colorClass }}">
            <div class="inner">
                <h3>{{ $ctrl.value }}</h3>
                <p>{{ $ctrl.text }}</p>
            </div>
            <div class="icon">
                <i class="fa {{ $ctrl.iconClass }}"></i>
            </div>
        </div>
    </div>
    `
})