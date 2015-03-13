var gulp = require('gulp');

gulp.task('watch', function() {
  'use strict';
  // Watch less files
  gulp.watch('./source/less/**/*.less', ['styles']);
  // Lint javascript files
  gulp.watch([
      './{app,gulpfile}.js',
      './gulp/**/*.js',
      './app_server/**/*.js',
      './routes/**/*.js',
      './source/js/**/*.js'
  ], ['jshint']);
});
