var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    runSequence = require('run-sequence');

gulp.task('default', function() {
  'use strict';
  runSequence('clean:styles', ['imagemin', 'watch']);
});
