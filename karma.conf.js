// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('karma-jasmine-html-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    remapIstanbulReporter: {
      dir: require('path').join(__dirname, 'reports/coverage/app-base'),
      reports: {
        html: 'coverage',
        lcovonly: 'reports/test-results/coverage/coverage.lcov'
      }
    },
    coverageReporter: {
      // specify a common output directory
      dir: require('path').join(__dirname, 'reports/coverage/app-base'),
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
      ]
    },
    reporters: ['progress', 'kjhtml','junit', 'coverage'],
    htmlReporter: {
      outputFile: 'reports/unit/units.html',

      // Optional 
      pageTitle: 'Vida - Tests Unitarios',
      subPageTitle: 'Presentacion HTML de los test unitarios',
      dir: 'reports/html/'
    },
    junitReporter: {
      outputDir: 'reports/unit',
      outputFile: 'test-results.xml',
      suite: '',
      useBrowserName: false
   },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    restartOnFileChange: true
  });
};
