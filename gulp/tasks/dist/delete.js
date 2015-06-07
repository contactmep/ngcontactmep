var gulp   = require('gulp');
var del    = require('del');

var config = require('../../config').delete.dist;

gulp.task('delete:dist', function(callback) {
  del(config.src, callback);
});