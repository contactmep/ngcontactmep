//directories
var app = './app';
var src = './src';
var dev = '/dev';

//globs
var fileGlob = '/*';
var directoryGlob = '/**'

//constructors
var appDev = app + dev;

//config object
module.exports = {
  delete:{
    dev:{
      src: appDev + fileGlob
    }
  }
}