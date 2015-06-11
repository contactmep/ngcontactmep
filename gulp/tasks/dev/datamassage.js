var gulp = require('gulp');
var remoteSrc = require('gulp-remote-src');
var rename = require("gulp-rename");
var replace = require('gulp-replace');
gulp.task('datamassage', function() {

  remoteSrc(['en/json/getBodyValues.html','fr/json/getBodyValues.html'], {
      base: 'http://www.europarl.europa.eu/meps/'
    })
    .pipe(rename(function(path) {
    	path.dirname = path.dirname.replace('json/','');
      	path.basename = "mepslist";
      	path.extname = ".json"
    }))
    .pipe(gulp.dest('./app/dev/assets/data/meps'));
})