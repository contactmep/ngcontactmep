var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../../config').serve.dist;

gulp.task('serve:dist', ['build:dist'], function(){
  browsersync(config);
})