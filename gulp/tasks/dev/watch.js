var gulp = require('gulp');
var runsequence = require('run-sequence');

//PATH CONFIG

var pathConfig = require('../../config.json');

var ngComponentJs = pathConfig.source 
  + pathConfig.assets 
  + pathConfig.ngComponents.dir 
  + '/**/*' 
  + pathConfig.scriptExtension;

var ngComponentsJade = pathConfig.source
  + pathConfig.assets 
  + pathConfig.ngComponents.dir 
  + "/**/*" 
  + pathConfig.ngComponents.renderTemplates 
  + pathConfig.templateExtension;

//TASK

gulp.task('watch',function(){
   gulp.watch(['./bower.json'],['watch:bower']);
   gulp.watch([ngComponentJs],['watch:localjs']);
   gulp.watch([ngComponentsJade],['jade']);
});

gulp.task('watch:bower',function(callback){
  runsequence('bower','inject',callback);
})

gulp.task('watch:localjs',function(callback){
  runsequence('copy:dev:localjs','inject',callback);
})