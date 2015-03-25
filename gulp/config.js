module.exports = {
  browsersync: {
    development: {
      proxy: 'localhost:9999',
      reloadDelay: 1000
    },
    production: {
      server: {
        baseDir: './'
      },
      port: 9998
    }
  },
  autoprefixer: {
    browsers: ['last 2 versions', '> 1%', 'Firefox ESR', 'Opera 12.1', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 4'],
    cascade: true
  },
  nodemon: {
    ext: 'js html jade',
    env: { 'NODE_ENV': 'development' },
    script: 'app.js'
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Separate bundle will be generated for each bundle config below
    bundleConfigs: [{
      entries     : './source/js/application.js',
      dest        : 'public/js',
      outputName  : 'application.js'
    }, {
      entries     : './source/js/head.js',
      dest        : 'public/js',
      outputName  : 'head.js'
    }, {
      entries     : './source/js/home.js',
      dest        : 'public/js',
      outputName  : 'home.js'
    }]
  }
};
