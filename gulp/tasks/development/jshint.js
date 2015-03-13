var gulp   = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function() {
  'use strict';

  return gulp.src([
      './{app,gulpfile}.js',
      './gulp/**/*.js',
      './app_server/**/*.js',
      './routes/**/*.js',
      './source/js/**/*.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
