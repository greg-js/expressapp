module.exports = {
  browsersync: {
    proxy: 'localhost:9999',
    files: [
      'public/css/**/*.css',
      'public/js/**/*.js',
      'app_server/**/*.{jade,js}',
      'routes/**/*.js',
      'app.js'
    ]
  },
  autoprefixer: {
    browsers: ['last 2 versions', '> 1%', 'Firefox ESR', 'Opera 12.1', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 4'],
    cascade: true
  }
};
