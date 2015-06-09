var gulp = require('gulp');
var runSequence = require('run-sequence');

//PATH CONFIG

var pathConfig = require('../../config.json');

var ngComponentJs = pathConfig.source 
  + pathConfig.assets 
  + pathConfig.ngComponents.dir 
  + '/**/*' 
  + pathConfig.scriptExtension;

var destination = pathConfig.testBuild.dev 
  + pathConfig.assets 
  + pathConfig.ngComponents.dir;

//TASKS

gulp.task('copy:dev',function(callback) {
   runSequence(['copy:dev:localjs'],callback);
})

gulp.task('copy:dev:localjs',['jslint'],function(){
  return gulp.src(ngComponentJs)
  .pipe(gulp.dest(destination))
})

