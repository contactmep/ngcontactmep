var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
 
gulp.task('push-gh-pages', function() {
  return gulp.src('./app/**/*')
    .pipe(ghPages());
});