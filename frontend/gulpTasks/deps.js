const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])//quando for chamada a task deps vai executar todas as dependencias


gulp.task('deps.js', function () {
    gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
        'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
        'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
        'node_modules/admin-lte/dist/js/app.min.js',
    ])
        .pipe(uglify()) //ele vai minificar todos as dependecias js
        .pipe(concat('deps.min.js')) //depois vai cocatenar todos as dependecias js e criar um arquivo deps.min.js
        .pipe(gulp.dest('public/assets/js')) // e vai salvar em public/assets/js
})

gulp.task('deps.css', function () {
    gulp.src([
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/admin-lte/bootstrap/css/bootstrap.min.css',
        'node_modules/admin-lte/dist/css/AdminLTE.min.css',
        'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
    ])
        .pipe(uglifycss({ "uglyComments": true })) //ele vai minificar todos as dependecias css e comentarios
        .pipe(concat('deps.min.css')) //depois vai cocatenar todos as dependecias css e criar um arquivo deps.min.css
        .pipe(gulp.dest('public/assets/css')) // e vai salvar em public/assets/css
})

gulp.task('deps.fonts', function () {
    gulp.src([
        'node_modules/font-awesome/fonts/*.*',
        'node_modules/admin-lte/bootstrap/fonts/*.*'
    ])
        .pipe(gulp.dest('public/assets/fonts'))// ele vai juntar os arquivos de fonte em apenas uma pasta
})