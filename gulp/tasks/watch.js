var gulp  = require('gulp'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util');

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

  return gutil.log('Watching for changes...');
});
