var gulp  = require('gulp'),
    del   = require('del'),
    gutil = require('gulp-util');

gulp.task('clean:styles', function() {
  'use strict';
  gutil.log('Cleaning public CSS folder...');
  return del('public/css/**/*');
});
