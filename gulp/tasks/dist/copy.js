var gulp = require('gulp');
var runSequence = require('run-sequence');

//PATH CONFIG

var pathConfig = require('../../config.json');

var source = pathConfig.testBuild.dev 
  + pathConfig.assets 
  + pathConfig.ngComponents.dir
  + '/**/*.html';

var destination = pathConfig.testBuild.dist
  + pathConfig.assets
  + pathConfig.ngComponents.dir;

//TASK

gulp.task('copy:dist',function(callback) {
   runSequence(['copy:dist:templates'],callback);
})

gulp.task('copy:dist:templates',function(){
  return gulp.src(source)
  .pipe(gulp.dest(destination));
})