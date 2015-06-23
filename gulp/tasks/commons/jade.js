var gulp = require('gulp');
var jade = require('gulp-jade');


//PATH CONFIG

var pathConfig = require('../../config.json');

var source = pathConfig.source
  + pathConfig.assets 
  + pathConfig.ngComponents.dir 
  + "/**/*" 
  + pathConfig.ngComponents.renderTemplates + pathConfig.templateExtension;

var destination = pathConfig.testBuild.dev 
  + pathConfig.assets 
  + pathConfig.ngComponents.dir;

//TASK

gulp.task('jade',function(){
  return gulp.src(source)
  .pipe(jade({pretty: true}))
  .pipe(gulp.dest(destination));
})