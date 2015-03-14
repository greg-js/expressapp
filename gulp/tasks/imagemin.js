var gulp     = require('gulp'),
    changed  = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    gutil    = require('gulp-util');

// minify new images
gulp.task('imagemin', function() {
  'use strict';
  gutil.log('Compressing images...');
  var imgSrc  = 'source/images/**/*',
      imgDest = 'public/images';

  return gulp.src(imgSrc)
    .pipe(changed(imgDest))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDest));
});
