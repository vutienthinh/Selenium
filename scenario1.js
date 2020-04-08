const { webdriver, Builder, By, Key, until } = require('selenium-webdriver'),
  test = require('./testing/index.js'),
  assert = require('assert'),
  Origin = require('selenium-webdriver/lib/input');

let driver;

describe('At The First Screen', function () {
  let initialImgStr = '';
  before(async function () {
    console.time("Time this");
    driver = new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:4200/?taskId=12d2aca9-68d0-11ea-936c-0a16f1679cc9');
    initialImgStr = await driver.executeScript('return document.querySelector(".lower-canvas").toDataURL();')
    // modify canvas
    //  const script = 'var c = document.querySelector(".lower-canvas"); var ctx = c.getContext("2d"); ctx.fillStyle = "green"; ctx.font = "30px Arial";; ctx.fillText("Modified",240, 140);';
    // await driver.executeScript(script);

    // await driver.wait(until.elementLocated(By.id('question1')));
    // await driver.findElement(By.id('mat-radio-8')).click();
    // await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2'))));
    // await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[1]')).click();
  });

  it('01 Submit Button Disabled', async function () {
    const isEnabled = await driver.findElement(By.id('submit-button')).isEnabled();
    await assert.equal(isEnabled, false);

    // driver.sleep(2000000);
    // await driver.wait(until.elementIsVisible(driver.findElement(By.className('lower-canvas'))));
    // const script = 'var c = document.querySelector("#real-canvas"); var ctx = c.getContext("2d"); ctx.fillStyle = "black"; ctx.strokeStyle = "blue"; ctx.fillText("automation user",10,90); ctx.fillRect(0,10,100,100);';
    // await driver.executeScript(script);

  });

  it('02 Yes No Option De-selected', async function () {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2-input'))));
    const isYesSelected = await driver.findElement(By.xpath('//input[@value="HAS_VALID" and @type="radio"]')).isSelected();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-3-input'))));
    const isNoSelected = await driver.findElement(By.xpath('//input[@value="NO_VALID" and @type="radio"]')).isSelected();
    const result = !isYesSelected && !isYesSelected;
    await assert.equal(result, true);

    // driver.sleep(2000000);
    // await driver.wait(until.elementIsVisible(driver.findElement(By.className('lower-canvas'))));
  });

  it('03 Arrow Button Disabled', async function () {
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//button[@mat-icon-button][1]'))));
    const backBtnEnable = await driver.findElement(By.xpath('//button[@mat-icon-button][1]')).isEnabled();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//button[@mat-icon-button][2]'))));
    const nextBtnEnanble = await driver.findElement(By.xpath('//button[@mat-icon-button][2]')).isEnabled();
    const result = !backBtnEnable && !nextBtnEnanble;
    await assert.equal(result, true);
  });

  it('04 User Can Not Draw', async function () {
    const imgStr = await driver.executeScript('return document.querySelector(".lower-canvas").toDataURL();')
    const isNotChanged = initialImgStr == imgStr;
    await assert.equal(isNotChanged, true);
  });

  it('05 Image load', async function () {
    // const result = driver.executeScript(
    //   "return arguments[0].complete && "+
    //   "typeof arguments[0].naturalWidth != \"undefined\" && "+
    //   "arguments[0].naturalWidth > 0", image);

    //    boolean loaded = false;
    //    if (result instanceof Boolean) {
    //      loaded = (Boolean) result;
    //      System.out.println(loaded);
    //    }
    // await driver.wait(until.elementIsVisible(driver.findElement(By.className('lower-canvas'))), 2000).then(function(elm) {
    //   console.log('go');
    // });
    //   return driver.wait(function() {
    //     return driver.findElement(By.className('lower-canvas')).isDisplayed();
    // }, 1000);
    await driver.wait(until.elementLocated(By.className('lower-canvas')), 10).then(function (elm) {
      console.log("Ok");
      console.timeEnd("Time this");
      // driver.quit();
    }).catch(function (ex) {
      console.timeEnd("Time this");
      console.log("Fail");
      // driver.quit();
    });
  });

  after(async function () { await driver.quit() });
});

