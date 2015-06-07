var gulp = require('gulp');

var runSequence = require('run-sequence');

gulp.task('build:dist', function(callback) {
  runSequence(
    'build:dev',
    'delete:dist',
    ['usemin','copy:dist'],
    callback
  );
})