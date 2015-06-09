var gulp   = require('gulp');
var del    = require('del');

var pathConfig = require('../../config.json');

var target = pathConfig.testBuild.dev + "/*"

gulp.task('delete:dev', function(callback) {
  del(target, callback);
});