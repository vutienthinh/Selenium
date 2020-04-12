const { webdriver, Builder, By, Key, until } = require('selenium-webdriver'),
  test = require('./testing/index.js'),
  assert = require('assert'),
  Origin = require('selenium-webdriver/lib/input');

let driver;

describe('No Option Selected', function () {
  // let initialImgStr = '';
  before(async function () {
    driver = new Builder().forBrowser('chrome').build();
    //await driver.get('http://localhost:4200/?taskId=12d2aca9-68d0-11ea-936c-0a16f1679cc9');
    await driver.get('http://localhost:4200/?taskId=faebaf49-6dd1-11ea-936c-0a16f1679cc9');
    // backup the initial canvas state
    // initialImgStr = await driver.executeScript('return document.querySelector(".lower-canvas").toDataURL();')
    // modify canvas
    //  const script = 'var c = document.querySelector(".lower-canvas"); var ctx = c.getContext("2d"); ctx.fillStyle = "green"; ctx.font = "30px Arial";; ctx.fillText("Modified",240, 140);';
    // await driver.executeScript(script);
    // click NO
    // await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-3'))));
    await driver.wait(until.elementLocated(By.id('mat-radio-3')), 5000);
    await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[2]')).click();
  });

  it('01 Submit Button Enabled', async function () {
    // await driver.wait(until.elementLocated(By.className('lower-canvas')), 5000);
    await driver.sleep(5000);
    const isEnabled = await driver.findElement(By.id('submit-button')).isEnabled();
    await assert.equal(isEnabled, true);
  });

  it('02 "Please press SUBMIT" text is shown', async function () {
    await driver.wait(until.elementLocated(By.id('nextPrompt')), 5000);
    const textIsPresented = await driver.findElement(By.id('nextPrompt')).getText();
    await assert.equal(!!textIsPresented, true);
  });

  it('03 User Can Not Draw', async function () {
    const initialImgStr = await driver.executeScript('return document.querySelector(".lower-canvas").toDataURL();')
    const modifiedImgStr = await driver.executeScript('return document.querySelector(".lower-canvas").toDataURL();')
    const isNotChanged = initialImgStr == modifiedImgStr;
    await assert.equal(isNotChanged, true);
  });

  after(async function () { await driver.quit() });
});