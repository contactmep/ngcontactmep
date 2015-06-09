var gulp = require('gulp');
var runsequence = require('run-sequence');

var config = require('../../config').watch;

gulp.task('watch',function(){
   gulp.watch(['./bower.json'],['watch:bower']);
   gulp.watch([config.copylocaljs.src],['watch:localjs']);
   gulp.watch([config.jade.src],['jade']);
});

gulp.task('watch:bower',function(callback){
  runsequence('bower','inject',callback);
})

gulp.task('watch:localjs',function(callback){
  runsequence('copy:dev:localjs','inject',callback);
})