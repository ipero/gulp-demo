var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

gulp.task('minify', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only JS files
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', autoprefixer('last 2 versions')))
    // Minifies only CSS files
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))

});
