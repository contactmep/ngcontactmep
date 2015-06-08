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
var templateGlob = localjs + recursiveGlob + '.jade';

//config object
module.exports = {
  delete:{
    dev:{
      src: appDev + fileGlob
    },
   dist:{
      src: ['./app/*','!./app/dev','!./app/test.html']
    } 
  },
  bower:{
    buildDest: appDev + bower,
    updateDest: src + bower
  },
  inject:{
    src: src + '/index.jade',
    dest : appDev,
    localjs: localjsGlob
  },
  copy:{
    dev:{
      localjs:{
        src: localjsGlob,
        dest: appDev + assetsDir + localjsDir
      }
    },
    dist:{
      templates:{
        src: appDev + assetsDir + localjsDir + recursiveGlob + '.html',
        dest: app + assetsDir + localjsDir
      }
    }
  },
  usemin:{
    src: appDev + '/index.html',
    dest: app
  },
  serve:{
    dev:{
      server: {
        baseDir:[appDev]
      },
      port:3000,
      files:[appDev+recursiveGlob]
    },
    dist:{
      server: {
        baseDir:[app]
      },
      port:3000,
      files:[app+recursiveGlob]
    }
  },
  jade:{
    src: templateGlob,
    dest: appDev + assetsDir + localjsDir
  }
}