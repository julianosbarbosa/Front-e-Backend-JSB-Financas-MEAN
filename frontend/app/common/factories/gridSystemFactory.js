angular.module('jsbFinancas').factory('gridSystem',[function(){
//convert os numeros nas classes de grid do bootstrap 
    function toCssClasses(numbers){
        const cols = numbers ? numbers.split(' ') : [] // se a variavel number estiver definida ele vai fazer numbers.split que vai separar os espaços em branco e gera um array com cada um dos numeros e caso nao retorna um array vazio
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}` // caso esse primeiro elemento estja preenchido a variavel classes recebe col-xs com o valor passado
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }
    return { toCssClasses } //espoe o objeto da factory
}])