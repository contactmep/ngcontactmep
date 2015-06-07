var gulp = require('gulp');
var usemin = require('gulp-usemin');

var config = require('../../config').usemin;

gulp.task('usemin', function () {
  return gulp.src(config.src)
    .pipe(usemin({
    vendorJS:['concat'],
    appJS:['concat'],
    vendorCss:['concat']
  }))
    .pipe(gulp.dest(config.dest));
})
  