const { webdriver, Builder, By, Key, until } = require('selenium-webdriver'),
  test = require('./testing/index.js'),
  assert = require('assert'),
  Origin = require('selenium-webdriver/lib/input');

const DEFAULT_LEVEL = 0;

let driver;

describe('MouseWheel Zooming Canvas', function () {
  before(async function () {
    driver = new Builder().forBrowser('chrome').build();
    // await driver.get('http://localhost:4200/?taskId=12d2aca9-68d0-11ea-936c-0a16f1679cc9');
    await driver.get('http://localhost:4200/?taskId=faebaf49-6dd1-11ea-936c-0a16f1679cc9');
  });

  it('01 The image has not changed', async function () {
    const initialZoomLevel = await driver.executeScript('var canvas = document.querySelector(".lower-canvas");return canvas.__ngContext__["3"]["8"].zoomLevel;');
    await driver.sleep(15000);
    // Zoom out
    await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = -120;canvas.dispatchEvent(evt);');
    const zoomLevel = await driver.executeScript('var canvas = document.querySelector(".lower-canvas");return canvas.__ngContext__["3"]["8"].zoomLevel;');
    await assert.equal(zoomLevel, DEFAULT_LEVEL);
  });

  it('02 The image has zoomed in', async function () {

    await driver.sleep(15000);
    // Zoom out
    await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = -120;canvas.dispatchEvent(evt);');
    // Zoom in
    await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = 120;canvas.dispatchEvent(evt);');
    // await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = 120;canvas.dispatchEvent(evt);');
    const zoomLevel = await driver.executeScript('var canvas = document.querySelector(".lower-canvas");return canvas.__ngContext__["3"]["8"].zoomLevel;');
    await assert.equal(zoomLevel, 0.15);
  });

  it('03 The image has zoomed back out', async function () {

    await driver.sleep(15000);
    // Zoom in
    await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = 120;canvas.dispatchEvent(evt);');
    // Zoom out
    await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = -120;canvas.dispatchEvent(evt);');
    // await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = 120;canvas.dispatchEvent(evt);');
    const zoomLevel = await driver.executeScript('var canvas = document.querySelector(".lower-canvas");return canvas.__ngContext__["3"]["8"].zoomLevel;');

    await assert.equal(zoomLevel, DEFAULT_LEVEL);
  });

  after(async function () { await driver.quit() });
}); 
