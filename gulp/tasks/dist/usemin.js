var gulp = require('gulp');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

var config = require('../../config').usemin;

gulp.task('usemin', function () {
  return gulp.src(config.src)
    .pipe(usemin({
    vendorJS:['concat',uglify(),rev()],
    appJS:['concat',uglify(),rev()],
    vendorCss:['concat',minifyCss(),rev()]
  }))
    .pipe(gulp.dest(config.dest));
})
  