var gulp = require('gulp'),
    del  = require('del');

gulp.task('clean:styles', function() {
  'use strict';
  return del('public/css/**/*');
});
