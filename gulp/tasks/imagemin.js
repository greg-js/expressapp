var gulp     = require('gulp'),
    changed  = require('gulp-changed'),
    imagemin = require('gulp-imagemin');

// minify new images
gulp.task('imagemin', function() {
  'use strict';
  var imgSrc  = 'source/images/**/*',
      imgDest = 'public/images';

  return gulp.src(imgSrc)
    .pipe(changed(imgDest))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDest));
});
