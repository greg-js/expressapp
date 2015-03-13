// For more information about gulp, check out http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup/

var gulp         = require('gulp'),
    requireDir   = require('require-dir');

// require all gulp tasks including subdirectories
requireDir('./gulp/tasks', { recurse: true });
