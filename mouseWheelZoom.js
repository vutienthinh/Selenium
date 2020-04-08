const { webdriver, Builder, By, Key, until } = require('selenium-webdriver'),
  test = require('./testing/index.js'),
  assert = require('assert'),
  Origin = require('selenium-webdriver/lib/input');

let driver;

describe('Zooming Canvas', function () {
  before(async function () {
    driver = new Builder().forBrowser('chrome').build();
    // await driver.get('http://localhost:4200/?taskId=12d2aca9-68d0-11ea-936c-0a16f1679cc9');
    await driver.get('http://localhost:4200/?taskId=faebaf49-6dd1-11ea-936c-0a16f1679cc9');
  });

  // it('01 The image has not changed', async function () {
  //   // Zoom out
  //   await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = -120;canvas.dispatchEvent(evt);');
  // });

  it('02 The image has zoomed in', async function () {
    // await driver.wait(until.elementLocated(By.id('canvas')), 5000);
    // await driver.wait(until.elementIsVisible(driver.findElement(By.id('canvas'))), 10000);
    await driver.sleep(10000);
    // Zoom in
    await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = 120;canvas.dispatchEvent(evt);');
    await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = 120;canvas.dispatchEvent(evt);');
    // Zoom out
    await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = -120;canvas.dispatchEvent(evt);');
    // const a = await driver.findElement(By.xpath('//app-draw-bbcl-widget'));
    // await a.getCssValue("height").then((size) => console.log(size));
    // console.log(a.length);
    // click YES
    // const actions = driver.actions({ bridge: true });
    // await driver.wait(until.elementLocated(By.id('mat-radio-2')), 5000);
    // // await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2'))));
    // await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[1]')).click();
    // // select Pedestrian option
    // await driver.findElement(By.xpath('//mat-select')).click();
    // await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//mat-option[2]'))));
    // await driver.findElement(By.xpath('//mat-option[2]')).click();
    // click Draw button
    // await driver.findElement(By.xpath('//app-draw-bbcl-widget')).click();
    // draw in canvas
    // await driver.findElement(By.className('lower-canvas')).then(async function (elm) {
    //   await actions.dragAndDrop(elm, { x: 100, y: 140 }).perform();
    //   const isEnabled = await driver.findElement(By.id('submit-button')).isEnabled();
    //   await assert.equal(isEnabled, true);
    // });
  });

  after(async function () { await driver.quit() });
}); 