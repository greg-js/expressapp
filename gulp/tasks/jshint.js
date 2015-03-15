var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var gutil  = require('gulp-util');

gulp.task('jshint', function() {
  'use strict';
  gutil.log('Linting JavaScript...');

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
