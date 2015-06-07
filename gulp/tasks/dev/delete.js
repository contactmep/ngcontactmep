var gulp   = require('gulp');
var del    = require('del');

var config = require('../../config').delete.dev;

gulp.task('delete:dev', function(callback) {
  del(config.src, callback);
});