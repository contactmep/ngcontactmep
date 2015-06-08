var gulp = require('gulp');
var config = require('../../config').watch;

gulp.task('watch',function(){
   gulp.watch('./src/**/*',['build:dev']);
});