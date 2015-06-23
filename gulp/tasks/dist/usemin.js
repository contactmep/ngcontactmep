var gulp = require('gulp');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

//PATH CONFIG

var pathConfig = require('../../config.json');

var source = pathConfig.testBuild.dev + '/index.html';

var destination = pathConfig.testBuild.dist;

//TASK

gulp.task('usemin', function () {
  return gulp.src(source)
    .pipe(usemin({
    vendorJS:['concat',uglify(),rev()],
    appJS:['concat',uglify(),rev()],
    vendorCss:['concat',minifyCss(),rev()]
  }))
    .pipe(gulp.dest(destination));
})
  