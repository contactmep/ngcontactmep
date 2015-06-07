var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('../../config').copy.dist;

gulp.task('copy:dist',function(callback) {
   runSequence(['copy:dist:templates'],callback);
})

gulp.task('copy:dist:templates',function(){
  return gulp.src(config.templates.src)
  .pipe(gulp.dest(config.templates.dest));
})