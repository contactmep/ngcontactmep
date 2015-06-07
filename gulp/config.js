//base directories
var app = './app';
var src = './src';

//sub directories
var dev = '/dev';
var assetsDir = '/assets';
var localjsDir = '/localjs';
var bower = '/bower_components';

//globs
var fileGlob = '/*';
var directoryGlob = '/**';
var recursiveGlob = directoryGlob + fileGlob;

//constructors
var appDev = app + dev;
var assets = app + assetsDir;
var localjs = src + assetsDir + localjsDir ;
var localjsGlob = localjs + recursiveGlob + '.js';

//config object
module.exports = {
  delete:{
    dev:{
      src: appDev + fileGlob
    }
  },
  bower:{
    buildDest: appDev + bower,
    updateDest: src + bower
  },
  inject:{
    src: src + '/index.html',
    dest : appDev,
    localjs: localjsGlob
  }
}