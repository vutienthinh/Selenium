const { webdriver, Builder, By, Key, until } = require('selenium-webdriver'),
  test = require('./testing/index.js'),
  assert = require('assert'),
  Origin = require('selenium-webdriver/lib/input');

const TIME_OUT = 20000;

let driver,
  // initialImgStr = '',
  start,
  end;

describe('At The First Screen', function () {
  before(async function () {
    start = new Date().getTime();
    driver = new Builder().forBrowser('chrome').build();
    // const actions = driver.actions({ bridge: true });
    await driver.get('http://localhost:4200/?taskId=faebaf49-6dd1-11ea-936c-0a16f1679cc9');
    // initialImgStr = await driver.executeScript('return document.querySelector(".lower-canvas").toDataURL();');

  });

  // it('01 Submit Button Disabled', async function () {
  //   const isEnabled = await driver.findElement(By.id('submit-button')).isEnabled();
  //   await assert.equal(isEnabled, false);
  // });

  // it('02 Yes No Option De-selected', async function () {
  //   await driver.wait(until.elementLocated(By.id('mat-radio-2-input')), 5000);
  //   // await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2-input'))));
  //   const isYesSelected = await driver.findElement(By.xpath('//input[@value="HAS_VALID" and @type="radio"]')).isSelected();
  //   await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-3-input'))));
  //   const isNoSelected = await driver.findElement(By.xpath('//input[@value="NO_VALID" and @type="radio"]')).isSelected();
  //   const result = !isYesSelected && !isYesSelected;
  //   await assert.equal(result, true);
  // });

  // it('03 Arrow Button Disabled', async function () {
  //   await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//button[@mat-icon-button][1]'))));
  //   const backBtnEnable = await driver.findElement(By.xpath('//button[@mat-icon-button][1]')).isEnabled();
  //   await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//button[@mat-icon-button][2]'))));
  //   const nextBtnEnanble = await driver.findElement(By.xpath('//button[@mat-icon-button][2]')).isEnabled();
  //   const result = !backBtnEnable && !nextBtnEnanble;
  //   await assert.equal(result, true);
  // });

  it('04 User Can Not Draw', async function () {
    const initialImgStr = await driver.executeScript('return document.querySelector(".lower-canvas").toDataURL();');
    // draw canvas
    // click YES
    const actions = driver.actions({ bridge: true });
    // // await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2'))));
    // await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[1]')).then(async function (elm) {
    //   await elm.click();
    // });
    // //await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[1]')).click();
    // // select Pedestrian option
    // await driver.findElement(By.xpath('//mat-select')).click();
    // await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//mat-option[2]'))));
    // await driver.findElement(By.xpath('//mat-option[2]')).click();
    // // click Draw button
    // // await driver.findElement(By.xpath('//app-draw-bbcl-widget')).click();
    // await driver.wait(until.elementLocated(By.id('submit-button')), 5000);
    // await driver.findElement(By.id('submit-button')).click();
    await driver.sleep(10000);
    await driver.findElement(By.className('lower-canvas')).then(async function (elm) {
      await actions.dragAndDrop(elm, { x: 100, y: 140 }).perform();
      const modifiedImgStr = await driver.executeScript('return document.querySelector(".lower-canvas").toDataURL();')
      const isNotChanged = initialImgStr == modifiedImgStr;
      await assert.equal(isNotChanged, true);
      // const isEnabled = await driver.findElement(By.id('submit-button')).isEnabled();
      // console.log(isEnabled);
      // await assert.equal(isEnabled, false);
    });

  });

  it('05 Image load Time', async function () {
    await driver.wait(until.elementLocated(By.className('lower-canvas')), 10).then(function (elm) {
      end = new Date().getTime();
    });

    let time = end - start;
    await assert.ok(time < TIME_OUT);
  });

  after(async function () { await driver.quit() });
});

