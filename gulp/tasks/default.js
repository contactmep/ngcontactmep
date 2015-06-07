var gulp = require('gulp');


gulp.task('default', ['build:dist'], function(){
  console.log('Welcome to the gulp generator of ngcontactmep!');
  console.log('The default tasks build the distribution version');
  console.log('The other tasks are')
  console.log('- gulp serve:dev')
  console.log('    build the development version, serve it and watch the dev files for changes')
  console.log('- gulp serve:dist')
  console.log('    build the distribution version, serve it ')
  console.log('- gulp build:dev')
   console.log('    build the development version')
  console.log('- gulp build:dist')
  console.log('    build the distribution version')
  console.log('-gulp delete')
   console.log('    delete all build files')
   console.log('- gulp delete:dev')
   console.log('    delete all development build files')
   console.log('- gulp delete:dist')
   console.log('    delete all distribution build files')
});