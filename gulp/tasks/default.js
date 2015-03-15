var gulp        = require('gulp');
var gutil       = require('gulp-util');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  'use strict';
  runSequence(
    'clean',
    'styles',
    'scripts',
    ['imagemin', 'browser-sync', 'watch']
  );
});
