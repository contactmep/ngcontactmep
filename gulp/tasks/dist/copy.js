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

var dataSource = pathConfig.testBuild.dev 
	+ pathConfig.assets 
	+ pathConfig.dataDir
  + '/**/*.json';

var dataDestination = pathConfig.testBuild.dist 
	+ pathConfig.assets 
	+ pathConfig.dataDir;

//TASK

gulp.task('copy:dist',function(callback) {
   runSequence(['copy:dist:templates','copy:dist:data'],callback);
})

gulp.task('copy:dist:templates',function(){
  return gulp.src(source)
  .pipe(gulp.dest(destination));
})

gulp.task('copy:dist:data',function(){
	return gulp.src(dataSource)
	.pipe(gulp.dest(dataDestination))
})