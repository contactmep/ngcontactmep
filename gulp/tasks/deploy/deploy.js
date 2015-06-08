var gulp = require('gulp');
var runsequence = require('run-sequence');

gulp.task('deploy',function(callback){
  runsequence(
    'build:dist',
    'delete:dev',
    'push-gh-pages',
    callback
  )
})