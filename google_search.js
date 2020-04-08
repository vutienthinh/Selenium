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
// const {Builder, By, Key, until} = require('selenium-webdriver');

// const {Action, Actions} = require('selenium-webdriver/lib/input');

// var driver = new Builder()
//     .forBrowser('chrome')
//     .build();
// Actions element = driver.findElement(By.className('lower-canvas'));

// Action builder = new Actions(driver);
//    const drawAction = builder.moveToElement(element,135,15)
//              .click()
//              .moveByOffset(200, 60) // second point
//              .click()
//              .moveByOffset(100, 70) // third point
//              .doubleClick()
//              .build();
//    drawAction.perform();