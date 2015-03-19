var gulp  = require('gulp');
var watch = require('gulp-watch');
var gutil = require('gulp-util');

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

  // Compile javascript files
  watch('./source/js/**/*.js', function() {
    gulp.start('scripts');
  });

  return gutil.log('Watching for changes...');
});
