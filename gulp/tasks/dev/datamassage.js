var gulp = require('gulp');
var runSequence = require('run-sequence');
var remoteSrc = require('gulp-remote-src');
var rename = require("gulp-rename");
var replace = require('gulp-replace');
var extractMepData = require('../../utilities/extractMepData');

//LOCAL CONFIG

var closingTag = /<\/(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

var langs = ['fr','en','es'];

var remoteSource = [];

for (lang in langs){
	remoteSource.push(langs[lang] + '/xml.html')
}

//PATH CONFIG

var pathConfig = require('../../config.json');

var mepsDataDest = pathConfig.testBuild.dev 
    + pathConfig.assets 
    + pathConfig.dataDir 
    + '/meps';

//TASK

gulp.task('datamassage', function(callback) {
    runSequence(['datamassage:mep'],callback)
})

gulp.task('datamassage:mep', function() {
  return remoteSrc(remoteSource, {
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
    .pipe(extractMepData())
    .pipe(gulp.dest(mepsDataDest));
})