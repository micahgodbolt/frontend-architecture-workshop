

exports.config = {

    specs: [
      "library/**/*.tests.js"
    ],

    capabilities: [{
        browserName: "chrome"
    }],

    logLevel: "error",

    coloredLogs: true,

    baseUrl: "http://localhost:3000/",
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 10000,
    //

    plugins: {
        webdrivercss: {
            screenshotRoot: 'tests/shots',
            failedComparisonsRoot: 'tests/diffs',
            misMatchTolerance: 0.05,
            screenWidth: [320,480,640,1024]
        }
    },

    framework: "mocha",
    reporter: "spec",
    reporterOptions: {
          outputDir: "./test/reports"
      },
    mochaOpts: {
        timeout: 60000,
        ui: "bdd"
    },

    //
    // =====
    // Hooks
    // =====
    // Run functions before or after the test. If one of them returns with a promise, WebdriverIO
    // will wait until that promise got resolved to continue.
    // see also: http://webdriver.io/guide/testrunner/hooks.html
    //
    // Gets executed before all workers get launched.
    onPrepare: function() {
      // bluebird.promisifyAll(selenium);

      // var promise = selenium.installAsync({
      //  logger: function(message) {
      //    console.log(message);
      //  }
      // }).then(function() {
      //  console.log("Starting selenium");

      //  return selenium.startAsync().then(function(child) {
      //    selenium.child = child;
      //    console.log("Selenium started");
      //  });
      // });


      // return promise;
    },
    //
    // Gets executed before test execution begins. At this point you will have access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before: function() {
            require("./beforeWebdriver.js");
    },
    //
    // Gets executed after all tests are done. You still have access to all global variables from
    // the test.
    //after: function(failures, pid) {
        // do something
    //},
    //
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
    onComplete: function() {
      console.log("\nSelenium process ended. Test suite complete");
    }
};
