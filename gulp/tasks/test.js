var gulp  = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('test', function() {
  'use strict';
  return gulp.src('tests/**/*.js')
    .pipe(mocha());
});
