var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var angularFileSort = require('gulp-angular-filesort');

var config = require('../../config').inject;

gulp.task('inject',function(){
  var bowersrc = bowerFiles();
  console.log(config.localjs)
  return gulp.src(config.src)
  .pipe(inject(gulp.src(bowersrc), {name: 'bower', relative: true}))
  .pipe(inject(gulp.src(config.localjs).pipe(angularFileSort()), {relative: true}))
  .pipe(gulp.dest(config.dest));
})