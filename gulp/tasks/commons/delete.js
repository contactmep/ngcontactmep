var gulp = require('gulp');
var runsequence = require('run-sequence');

gulp.task('delete',function(callback){
  runsequence(
    ['delete:dev','delete:dist'],
    callback
  )
})