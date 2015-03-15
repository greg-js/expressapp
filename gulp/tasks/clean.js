var gulp  = require('gulp');
var del   = require('del');
var gutil = require('gulp-util');

gulp.task('clean', function() {
  'use strict';
  gutil.log('Cleaning public folder...');
  return del(['public/css/**/*', 'public/js/**/*']);
});
