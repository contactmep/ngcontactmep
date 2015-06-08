var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('../../config').copy.dev;

gulp.task('copy:dev',function(callback) {
   runSequence(['copy:dev:localjs'],callback);
})

gulp.task('copy:dev:localjs',['jslint'],function(){
  return gulp.src(config.localjs.src)
  .pipe(gulp.dest(config.localjs.dest))
})

