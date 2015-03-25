var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var config  = require('../config');

gulp.task('nodemon', function() {
  'use strict';
  if ( process.env.NODE_ENV !== 'production' ) {
    nodemon(config.nodemon);
  }
});
