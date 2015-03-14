var gulp        = require('gulp'),
    browsersync = require('browser-sync'),
    config      = require('../config').browsersync.development;

// Start browser-sync server

gulp.task('browser-sync', function() {
  'use strict';
  browsersync(config);
});
