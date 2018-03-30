const gulp = require('gulp');
const sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


// copiando archivos de bootstrap
gulp.task('sass', ()=>{
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss',
  'src/sass/*.scss'
])
.pipe(sass())
.pipe(concat('main.min.css'))
.pipe(gulp.dest('public/css'))
})

// copiando archivos de jquery 
gulp.task('js',()=>{
  return gulp.src(['node_modules/jquery/dist/jquery.js','node_modules/bootstrap/dist/js/bootstrap.js',
'node_modules/popper.js/dist/umd/popper.js','src/app2.js'])
.pipe(concat('app.min.js')) 
.pipe(uglify())
.pipe(gulp.dest('public/js'))

})

