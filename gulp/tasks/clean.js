var gulp  = require('gulp');
var del   = require('del');

gulp.task('clean:js', function() {
  'use strict';
  return del('public/js/**/*');
});

gulp.task('clean:css', function() {
  'use strict';
  return del('public/css/**/*');
});
