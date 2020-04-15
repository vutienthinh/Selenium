const { webdriver, Builder, By, Key, until } = require('selenium-webdriver'),
  test = require('./testing/index.js'),
  assert = require('assert'),
  Origin = require('selenium-webdriver/lib/input');

const DEFAULT_LEVEL = 0;

let driver, actions;

describe('Button Zooming Canvas', function () {
  before(async function () {
    driver = new Builder().forBrowser('chrome').build();
    actions = driver.actions({ bridge: true });
    // await driver.get('http://localhost:4200/?taskId=12d2aca9-68d0-11ea-936c-0a16f1679cc9');
    await driver.get('http://localhost:4200');
    // await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = 120;canvas.dispatchEvent(evt);');
    // await driver.executeScript('var canvas = document.getElementById("canvas");var evt = document.createEvent("MouseEvents");evt.initEvent("mousewheel", true, true);evt.wheelDelta = -120;canvas.dispatchEvent(evt);');
  });

  it('01 The image has not changed', async function () {
    await driver.sleep(15000);
    await driver.findElement(By.className('lower-canvas')).then(async (elm) => {
      //click icon zoom in
      await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom In"]'))));
      await driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom In"]')).click();
      await actions.click(elm).perform();
      // click icon pan
      await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//img[@ng-reflect-message="Pan"]'))));
      await driver.findElement(By.xpath('//img[@ng-reflect-message="Pan"]')).click();
      await actions.dragAndDrop(elm, { x: 10, y: 220 }).perform();
      // // click icon zoom out
      // await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom Out"]'))));
      // await driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom Out"]')).click();
      // // click on image to zoom out
      // await actions.doubleClick(elm).perform();
      // const zoomLevel = await driver.executeScript('var canvas = document.querySelector(".lower-canvas");return canvas.__ngContext__["3"]["8"].zoomLevel;');
      // // console.log(zoomLevel);
      // await assert.equal(zoomLevel, DEFAULT_LEVEL);
    });

  });

  // it('02 The image has zoomed in', async function () {
  //   const initialZoomLevel = await driver.executeScript('var canvas = document.querySelector(".lower-canvas");return canvas.__ngContext__["3"]["8"].zoomLevel;');
  //   await driver.sleep(15000);

  //   await driver.findElement(By.className('lower-canvas')).then(async (elm) => {
  //     // click icon zoom out
  //     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom Out"]'))));
  //     await driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom Out"]')).click();
  //     // click on image to zoom out
  //     await actions.doubleClick(elm).perform();
  //     //click icon zoom in
  //     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom In"]'))));
  //     await driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom In"]')).click();
  //     // click on image to zoom in
  //     await actions.doubleClick(elm).perform();
  //     const zoomLevel = await driver.executeScript('var canvas = document.querySelector(".lower-canvas");return canvas.__ngContext__["3"]["8"].zoomLevel;');
  //     console.log(zoomLevel, initialZoomLevel);
  //     // level of zoom in is 0.4
  //     await assert.equal(zoomLevel, 0.6);
  //   });

  // });

  // it('03 The image has zoomed back out', async function () {
  //   // const initialZoomLevel = await driver.executeScript('var canvas = document.querySelector(".lower-canvas");return canvas.__ngContext__["3"]["8"].zoomLevel;');
  //   await driver.sleep(15000);
  //   // click icon zoom out
  //   // await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom Out"]'))));
  //   // await driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom Out"]')).click();
  //   await driver.findElement(By.className('lower-canvas')).then(async (elm) => {
  //     // click on image to zoom out
  //     // await actions.doubleClick(elm).perform();
  //     //click icon zoom in
  //     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom In"]'))));
  //     await driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom In"]')).click();
  //     // click on image to zoom in
  //     await actions.doubleClick(elm).perform();
  //     //click icon zoom out
  //     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom Out"]'))));
  //     await driver.findElement(By.xpath('//img[@ng-reflect-message="Zoom Out"]')).click();
  //     // click on image to zoom out
  //     await actions.doubleClick(elm).perform();
  //     const zoomLevel = await driver.executeScript('var canvas = document.querySelector(".lower-canvas");return canvas.__ngContext__["3"]["8"].zoomLevel;');
  //     // console.log(zoomLevel, initialZoomLevel);
  //     // level of zoom in is 0.4
  //     await assert.equal(zoomLevel, DEFAULT_LEVEL);
  //   });
  // });

  after(async function () { await driver.quit() });
});
