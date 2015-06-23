var gulp = require('gulp');

var runSequence = require('run-sequence');

gulp.task('build:dev', function(callback) {
  runSequence(
    'delete:dev',
    ['bower','copy:dev','jade','datamassage'],
    'inject',
    callback
  );
});