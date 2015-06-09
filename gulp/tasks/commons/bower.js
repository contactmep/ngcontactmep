var gulp = require('gulp');
var bower = require('gulp-bower');

//PATH CONFIG

var pathConfig = require('../../config.json');

var buildDestination = pathConfig.testBuild.dev + pathConfig.bowerComponents;
var sourceDestination = pathConfig.source + pathConfig.bowerComponents;

//TASK

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(buildDestination))
    .pipe(gulp.dest(sourceDestination));
})