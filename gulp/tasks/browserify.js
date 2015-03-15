var gulp         = require('gulp');
var browsersync  = require('browser-sync');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').browserify;

// Run JavaScript through Browserify

gulp.task('scripts', function(callback) {
  'use strict';
  browsersync.notify('Compiling JavaScript...');

  var bundleQueue = config.bundleConfigs.length;

  var browserifyThis = function(bundleConfig) {

    var bundler = browserify({
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: false,
      // Specify entry point for app
      entries: bundleConfig.entries,
      // Enable source maps
      debug: config.debug
    });

    var bundle = function() {
      bundleLogger.start(bundleConfig.outputName);

      return bundler
        .bundle()
        .on('error', handleErrors)
        // Use vinyl-source-stream to make the stream gulp-compatible
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    if ( global.isWatching ) {
      // Wrap with watchify and rebundle on change
      bundler = watchify(bundler);
      bundler.on('update', bundle);
    }

    var reportFinished = function() {
      bundleLogger.end(bundleConfig.outputName);

      if ( bundleQueue ) {
        bundleQueue--;
        if ( bundleQueue === 0 ) {
          // tell gulp the task is complete
          // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
          callback();
        }
      }
    };

    return bundle();
  };

  // Bundle each bundleConfig
  config.bundleConfigs.forEach(browserifyThis);
});
