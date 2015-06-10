var gulp = require('gulp');
var remoteSrc = require('gulp-remote-src');
var rename = require("gulp-rename");
var replace = require('gulp-replace');
var closingTag = /<\/(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
gulp.task('datamassage', function() {

  remoteSrc(['xml.html'], {
      base: 'http://www.europarl.europa.eu/meps/en/',
    })
    .pipe(replace('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', ''))
    .pipe(replace('<meps>', '['))
    .pipe(replace('</meps>', ']'))
    .pipe(replace('<mep>', '{'))
    .pipe(replace('</mep>', '},'))
    .pipe(replace('"', ''))
    .pipe(replace(closingTag, '",'))
    .pipe(replace('<', '"'))
    .pipe(replace('>', '":"'))
    .pipe(replace(',}', '}'))
    .pipe(replace(',]', ']'))
    .pipe(rename(function(path) {
      path.basename = "mepslist";
      path.extname = ".json"
    }))
    .pipe(gulp.dest('./app/dev/assets/data'));
})