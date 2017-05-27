angular.module('jsbFinancas').component('contentHeader', {
    bindings: {  // primeiro parametro sao os bindings
        name: '@', // @ pq é um componente string
        small: "@",
    },
    // segundo parametro é o template
    template: ` 
    <section class="content-header">
        <h1>{{$ctrl.name}}<small> {{$ctrl.small}}</small></h1>
    </section>
    `
})