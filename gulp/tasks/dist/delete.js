var gulp   = require('gulp');
var del    = require('del');

//PATH CONFIG

var pathConfig = require('../../config.json');

var target = [
  pathConfig.testBuild.dist + '/*',
  '!' + pathConfig.testBuild.dev,
  '!' + pathConfig.testBuild.dist + '/test.html'
]

//TASK

gulp.task('delete:dist', function(callback) {
  del(target, callback);
});