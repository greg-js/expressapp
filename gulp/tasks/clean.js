var gulp  = require('gulp');
var del   = require('del');
var gutil = require('gulp-util');

gulp.task('clean:js', function() {
  'use strict';
  gutil.log('Cleaning public js folder...');
  return del('public/js/**/*');
});

gulp.task('clean:css', function() {
  'use strict';
  gutil.log('Cleaning public css folder...');
  return del('public/css/**/*');
});
