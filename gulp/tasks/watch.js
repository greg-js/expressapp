var gulp    = require('gulp'),
    watch   = require('gulp-watch'),
    gutil   = require('gulp-util'),
    nodemon = require('gulp-nodemon');

gulp.task('watch', function() {
  'use strict';

  // Compile less files
  watch('./source/less/**/*.less', function() {
    gulp.start('styles');
  });

  // Lint javascript files
  watch([
      './{app,gulpfile}.js',
      './gulp/**/*.js',
      './app_server/**/*.js',
      './routes/**/*.js',
      './source/js/**/*.js'
  ], function() {
    gulp.start('jshint');
  });

  // start nodemon only if not in production mode
  if ( process.env.NODE_ENV !== 'production' ) {
    nodemon({ script: 'app.js' });
  }

  return gutil.log('Watching for changes...');
});
