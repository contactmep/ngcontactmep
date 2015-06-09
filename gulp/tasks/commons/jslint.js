var gulp = require('gulp');
var jshint = require('gulp-jshint');

//PATH CONFIG

var pathConfig = require('../../config.json');

var ngComponentJs = pathConfig.source 
  + pathConfig.assets 
  + pathConfig.ngComponents.dir 
  + '/**/*' 
  + pathConfig.scriptExtension;

//TASK

gulp.task('jslint', function() {
  return gulp.src(ngComponentJs)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('gulp-jshint-file-reporter', {filename:'./jshint-output.log'}));
})