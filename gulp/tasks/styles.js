var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var less         = require('gulp-less');
var path         = require('path');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS    = require('gulp-minify-css');
var rename       = require('gulp-rename');
var gutil        = require('gulp-util');
var config       = require('../config');
var browsersync  = require('browser-sync');

// less for styling
gulp.task('styles', function() {
  'use strict';

  gutil.log('Compiling and minifying CSS...');
  return gulp.src('./source/less/styles.less')
    .pipe(plumber())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest('./public/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'))
    .pipe(browsersync.reload({ stream: true }));
});
