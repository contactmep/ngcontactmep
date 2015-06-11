var through = require('through2');
var _ = require('lodash');
var gutil = require('gulp-util');

module.exports = function extractFilters(){
	var pipe = through.obj(function(file, enc, cb) {
		var lang = file.path.split('\\')[3];
		var data = JSON.parse(file.contents.toString());
		var filters = {}
		filters.country = uniqPluck(data,'country');
		filters.politicalGroup = uniqPluck(data,'politicalGroup')
		filters.nationalPoliticalGroup = uniqPluck(data,'nationalPoliticalGroup')
		var filtersFile = new gutil.File({
			path: lang +'/filter.json',
			contents: new Buffer(JSON.stringify(filters))
		})
		this.push(filtersFile)
		this.push(file)
    	cb();
    })

    return pipe;
}

function uniqPluck(data,key){
	var result = _.uniq(_.pluck(data,key));
	return result
}