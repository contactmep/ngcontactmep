var gulp = require('gulp');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');

var config = require('../../config').usemin;

gulp.task('usemin', function () {
  return gulp.src(config.src)
    .pipe(usemin({
    vendorJS:['concat',rev()],
    appJS:['concat',rev()],
    vendorCss:['concat',rev()]
  }))
    .pipe(gulp.dest(config.dest));
})
  