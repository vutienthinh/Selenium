// const {Builder, By, Key, until} = require('selenium-webdriver');

// var driver = new Builder()
//     .forBrowser('chrome')
//     .build();

// driver.get('http://www.google.com/ncr')
//     .then(_ =>
//         driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
//     .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
//     .then(_ => driver.quit());
// const {Builder, By, Key, until} = require('selenium-webdriver');

// (async function example() {
//   let driver = await new Builder().forBrowser('chrome').build();
//   try {
//     await driver.get('http://www.google.com/ncr');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     await driver.close();
//   }
// })();
const webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('http://www.google.com');

driver.findElement(By.name('q')).sendKeys('webdriver');

driver.sleep(1000).then(function () {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});

driver.findElement(By.name('btnK')).click();

driver.sleep(2000).then(function () {
  driver.getTitle().then(function (title) {
    if (title === 'webdriver - Google Search') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    driver.quit();
  });
});
