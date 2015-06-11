var gulp = require('gulp');
var remoteSrc = require('gulp-remote-src');
var rename = require("gulp-rename");
var replace = require('gulp-replace');
var extractFilters = require('../../utilities/extractFilters');

var closingTag = /<\/(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

var langs = ['fr','en','es'];

var remoteSource = [];

for (lang in langs){
	remoteSource.push(langs[lang] + '/xml.html')
}

gulp.task('datamassage', function() {

  remoteSrc(remoteSource, {
      base: 'http://www.europarl.europa.eu/meps/',
    })
    .pipe(replace('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', ''))
    .pipe(replace('<meps>', '['))
    .pipe(replace('</meps>', ']'))
    .pipe(replace('<mep>', '{"'))
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
    .pipe(extractFilters())
    .pipe(gulp.dest('./app/dev/assets/data/meps'));
})