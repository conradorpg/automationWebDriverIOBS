const { join } = require('path');

exports.config = {
    // host: 'localhost',
    // path: '/wd/hub',
    // services: ['appium'],
    services: ['browserstack'],
    // port: 4723,
    runner: 'local',
    user: 'conradoromancene_RgluZQ',
    key: 'yd7y5KuFfuZixpyiQebz',
    specs: ['./test/specs/*.spec.js'],
    framework: 'mocha',
    capabilities: [{
        // appiumVersion: '1.22.3',
        // app: join(process.cwd(), './app/android/PreciseUnitConversion.apk'),
        // platformName: 'Android',
        // platformVersion: '7.0',
        // deviceName: 'emulator-5554',
        // appPackage: 'com.ba.universalconverter',
        // appActivity: 'MainConverterActivity',
        // automationName: 'UiAutomator2'
        project: "Webdriverio BS Project",
        build: "browserstack-build-1",
        name: "apk_test",
        device: "Google Pixel 3",
        os_version: "9.0",
        app: 'bs://59551105e3c37f0037190b540bfc993357897ba7'
    }],
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    }
}