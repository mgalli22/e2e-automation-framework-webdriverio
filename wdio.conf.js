require('dotenv').config();
const { getEnv } = require('./utils/env');

exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 3,
    capabilities: [{
        maxInstances: 3,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: getEnv('BASE_URL', 'https://www.google.com'),
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: [
        'spec',
        ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true }]
    ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    //
    // Custom hooks for logging, screenshots, etc.
    before: function() {
        require('@wdio/sync');
        browser.setWindowSize(1920, 1080);
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
    //
    // Custom commands
    onPrepare: function (config, capabilities) {
        console.log('<<< TESTS STARTING >>>');
    },
    onComplete: function(exitCode, config, capabilities, results) {
        console.log('<<< TESTS FINISHED >>>');
    }
};