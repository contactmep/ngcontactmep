var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var angularFileSort = require('gulp-angular-filesort');
var jade = require('gulp-jade');

//PATH CONFIGURATION

var pathConfig = require('../../config.json');

var source = pathConfig.source 
  + '/index' 
  + pathConfig.templateExtension;

var ngComponentJs = pathConfig.source 
  + pathConfig.assets 
  + pathConfig.ngComponents.dir 
  + '/**/*' 
  + pathConfig.scriptExtension;

var destination = pathConfig.testBuild.dev;

//TASK

gulp.task('inject',function(){
  var bowersrc = bowerFiles();

  return gulp.src(source)
  .pipe(jade({pretty: true}))
  .pipe(inject(gulp.src(bowersrc), {name: 'bower', relative: true}))
  .pipe(inject(gulp.src(ngComponentJs)
               .pipe(angularFileSort()), {relative: true}))
  .pipe(gulp.dest(destination));
})