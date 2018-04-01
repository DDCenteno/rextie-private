const gulp = require('gulp');
const sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var react = require('gulp-react');
var imagemin = require('gulp-imagemin');

// copiando archivos de bootstrap
gulp.task('sass', ()=>{
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss',
  'src/sass/*.scss'
])
.pipe(sass())
.pipe(concat('main.min.css'))
.pipe(gulp.dest('dist/css'))
})



// copiando archivos de jquery 
gulp.task('js',()=>{
  return gulp.src(['node_modules/jquery/dist/jquery.js','node_modules/bootstrap/dist/js/bootstrap.js',
'node_modules/popper.js/dist/umd/popper.js'])
.pipe(concat('app.min2.js')) 
.pipe(uglify())
.pipe(gulp.dest('dist/js'))

})

// tarea imágenes
gulp.task('images', function () {
  return gulp.src(['src/images/*.*'])
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images/'));
});


// una tarea que ejecuta todo
gulp.task('minifica-todo',['sass','js','images'])

// va actualizando ante cualquier cambio
gulp.task('watch', function(){
    gulp.watch(['src/sass/*.scss'], ['css']);
    
  })