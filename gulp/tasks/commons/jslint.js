var gulp = require('gulp');
var jshint = require('gulp-jshint');

var config = require('../../config').inject;

gulp.task('jslint', function() {
  return gulp.src(config.localjs)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('gulp-jshint-file-reporter', {filename:'./jshint-output.log'}));
})