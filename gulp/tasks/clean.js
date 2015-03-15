var gulp  = require('gulp');
var del   = require('del');
var gutil = require('gulp-util');

gulp.task('clean:styles', function() {
  'use strict';
  gutil.log('Cleaning public CSS folder...');
  return del('public/css/**/*');
});
