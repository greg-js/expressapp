var gulp  = require('gulp'),
    gutil = require('gulp-util');

gulp.task('default', ['watch'], function() {
  'use strict';
  return gutil.log('Gulp is running!');
});
