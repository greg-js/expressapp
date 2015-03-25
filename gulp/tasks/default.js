var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  'use strict';
  runSequence(
    ['clean:css', 'clean:js'],
    'styles',
    'scripts',
    'nodemon',
    'imagemin',
    ['browsersync:development', 'watch']
  );
});
