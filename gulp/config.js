module.exports = {
  browsersync: {
    development: {
      port: 9999,
      proxy: 'localhost:3000',
      files: [
        'public/css/**/*.css',
        'public/js/**/*.js',
        'app_server/**/*.{jade,js}',
        'routes/**/*.js',
        'app.js'
      ]
    }
  }
};
