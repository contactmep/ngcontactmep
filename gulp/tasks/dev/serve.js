var gulp        = require('gulp');
var browsersync = require('browser-sync');

//PATH CONFIG

var pathConfig = require('../../config.json');

var baseDir = pathConfig.testBuild.dev;

//TASK

gulp.task('serve:dev', ['build:dev','watch'], function(){
  browsersync({server: {
        baseDir:[baseDir]
      },
      port:3000,
      files:[baseDir+'/**/*']
    });
});