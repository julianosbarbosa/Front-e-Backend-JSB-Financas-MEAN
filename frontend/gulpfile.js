const gulp = require('gulp')
const util = require('gulp-util') //importa gulp-util do node-modules intalado

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server') //importa arquivos criados em gulp tasks

gulp.task('default',function(){ //o arquivo default q starta a aplicação
    if(util.env.production){ //se server for startado em produção
        gulp.start('deps', 'app')
    }else{//se for startado em desenvolvimento sobe o servidor local
        gulp.start('deps', 'app', 'server')
    }
})