// const {Builder, By, Key, until} = require('selenium-webdriver');

// var driver = new Builder()
//     .forBrowser('firefox')
//     .build();

// driver.get('http://www.google.com/ncr')
//     .then(_ =>
//         driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
//     .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
//     .then(_ => driver.quit());
// const {Builder, By, Key, until} = require('selenium-webdriver');

// (async function example() {
//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('http://www.google.com/ncr');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     // await driver.quit();
//   }
// })();

const assert = require('assert');

const {Browser, By, Key, until} = require('selenium-webdriver');
const {ignore, suite} = require('./testing/index.js');

suite(function(env) {
  describe('Google Search', function() {
    let driver;

    before(async function() {
      // env.builder() returns a Builder instance preconfigured for the
      // envrionment's target browser (you may still define browser specific
      // options if necessary (i.e. firefox.Options or chrome.Options)).
      driver = await env.builder().build();
    });

    it('demo', async function() {
      // await driver.get('https://www.google.com/ncr');
      await driver.get('localhost:4200');
      // driver.sleep(2000).then(async function() {
        await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-3-input')), 1000));
        await driver.findElement(By.id('mat-radio-3-input')).click();
      // });
      //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    });

    // The ignore function returns wrappers around describe & it that will
    // suppress tests if the provided predicate returns true. You may provide
    // any synchronous predicate. The env.browsers(...) function generates a
    // predicate that will suppress tests if the  env targets one of the
    // specified browsers.
    //
    // This example is always configured to skip Chrome.
    // ignore(env.browsers(Browser.CHROME)).it('demo 2', async function() {
    //   await driver.get('https://www.google.com/ncr');
    //   await driver.wait(until.urlIs('https://www.google.com/'), 1500);
    // });

    after(() => driver && driver.quit());
  });
});