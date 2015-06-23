var gulp        = require('gulp');
var browsersync = require('browser-sync');

//PATH CONFIG

var pathConfig = require('../../config.json');

var baseDir = pathConfig.testBuild.dist;

//TASK

gulp.task('serve:dist', ['build:dist'], function(){
  browsersync({
      server: {
        baseDir:[baseDir]
      },
      port:3000,
      files:[baseDir+'/*/**']
    });
})