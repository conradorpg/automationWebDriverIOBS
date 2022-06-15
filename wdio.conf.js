const { join } = require('path');

exports.config = {
    host: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        app: join(process.cwd(), './app/android/com.woocommerce.apk'),
        platformName: 'Android',
        platformVersion: '7.0',
        deviceName: 'Pixel 2',
        appPackage: 'com.woocommerce.android',
        appActivity: 'ui.main.MainActivity',
    }],
    waitForTimeTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    }
}