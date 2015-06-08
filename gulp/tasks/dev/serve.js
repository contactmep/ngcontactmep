var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../../config').serve.dev;

gulp.task('serve:dev', ['build:dev','watch'], function(){
  browsersync(config);
})