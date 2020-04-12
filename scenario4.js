const { webdriver, Builder, By, Key, until } = require('selenium-webdriver'),
  test = require('./testing/index.js'),
  assert = require('assert'),
  Origin = require('selenium-webdriver/lib/input');

const TIME_OUT = 1000;

let driver,
  start,
  end;

describe('Draw Canvas', function () {
  before(async function () {
    driver = new Builder().forBrowser('chrome').build();
    // await driver.get('http://localhost:4200/?taskId=12d2aca9-68d0-11ea-936c-0a16f1679cc9');
    // await driver.get('http://localhost:4200/?taskId=faebaf49-6dd1-11ea-936c-0a16f1679cc9');
    await driver.get('http://localhost:4200');
    // click YES
    const actions = driver.actions({ bridge: true });
    await driver.wait(until.elementLocated(By.xpath('//mat-radio-group/mat-radio-button[1]')), 10000);
    // await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2'))));
    await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[1]')).click();
    // select Pedestrian option
    await driver.findElement(By.xpath('//mat-select')).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//mat-option[2]'))));
    await driver.findElement(By.xpath('//mat-option[2]')).click();
  });

  // it('01 Drawing instructions show up', async function () {
  //   // click YES
  //   // try to find the element until reach the time out
  //   // await driver.wait(until.elementLocated(By.id('mat-radio-2')), 5000);
  //   // //  await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2'))));
  //   // await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[1]')).click();
  //   // // select Pedestrian option
  //   // await driver.findElement(By.xpath('//mat-select')).click();
  //   // await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//mat-option[2]'))));
  //   // await driver.findElement(By.xpath('//mat-option[2]')).click();
  //   // click Draw button
  //   // await driver.findElement(By.xpath('//app-draw-bbcl-widget')).click();
  //   await driver.findElement(By.xpath('//app-next-steps')).then(present => assert.equal(!!present, true));
  // });

  // it('02 Submit Button Enabled', async function () {
  //   // const a = await driver.findElement(By.xpath('//app-draw-bbcl-widget'));
  //   // await a.getCssValue("height").then((size) => console.log(size));
  //   // console.log(a.length);
  //   // click YES
  //   const actions = driver.actions({ bridge: true });
  //   // await driver.wait(until.elementLocated(By.id('mat-radio-2')), 5000);
  //   // // await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2'))));
  //   // await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[1]')).click();
  //   // // select Pedestrian option
  //   // await driver.findElement(By.xpath('//mat-select')).click();
  //   // await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//mat-option[2]'))));
  //   // await driver.findElement(By.xpath('//mat-option[2]')).click();
  //   // click Draw button
  //   // await driver.findElement(By.xpath('//app-draw-bbcl-widget')).click();
  //   // draw in canvas
  //   await driver.sleep(5000);
  //   // await driver.wait(until.elementLocated(By.className('lower-canvas')));
  //   // await driver.wait(until.elementIsVisible(driver.findElement(By.className('lower-canvas'))));
  //   await driver.findElement(By.className('lower-canvas')).then(async function (elm) {
  //     await actions.dragAndDrop(elm, { x: 100, y: 140 }).perform();
  //     const isEnabled = await driver.findElement(By.id('submit-button')).isEnabled();
  //     await assert.equal(isEnabled, true);
  //   });
  // });

  // it('03 Click submit button then move next frame', async function () {
  //   // click YES
  //   const actions = driver.actions({ bridge: true });
  //   // await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2'))));
  //   // await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[1]')).click();
  //   // // select Pedestrian option
  //   // await driver.findElement(By.xpath('//mat-select')).click();
  //   // await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//mat-option[2]'))));
  //   // await driver.findElement(By.xpath('//mat-option[2]')).click();
  //   // // click Draw button
  //   // // await driver.findElement(By.xpath('//app-draw-bbcl-widget')).click();
  //   await driver.sleep(5000);
  //   await driver.findElement(By.className('lower-canvas')).then(async function (elm) {
  //     await actions.dragAndDrop(elm, { x: 100, y: 140 }).perform();
  //     // await driver.wait(until.elementLocated(By.id('submit-button')), 10000);
  //     await driver.findElement(By.id('submit-button')).click();
  //     await driver.wait(until.elementLocated(By.xpath('//div[@id="stepper"]/label')), 5000);
  //     // await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//label[@_ngcontent-kkf-c95]'))), 10000);
  //     const nextFrameText = await driver.findElement(By.xpath('//div[@id="stepper"]/label')).getText();
  //     console.log(nextFrameText);
  //     await assert.equal(nextFrameText, 'Image 2 / 5');
  //   });
  // });

  it('04 The image shows up very quickly', async function () {
    // click YES
    const actions = driver.actions({ bridge: true });
    // await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2'))));
    // await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[1]')).click();
    // // select Pedestrian option
    // await driver.findElement(By.xpath('//mat-select')).click();
    // await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//mat-option[2]'))));
    // await driver.findElement(By.xpath('//mat-option[2]')).click();
    // // click Draw button
    // // await driver.findElement(By.xpath('//app-draw-bbcl-widget')).click();
    await driver.sleep(5000);
    await driver.findElement(By.className('lower-canvas')).then(async (elm) => {
      await actions.dragAndDrop(elm, { x: 100, y: 140 }).perform();
      // await driver.wait(until.elementLocated(By.id('submit-button')), 10000);
      await driver.findElement(By.id('submit-button')).click();
      start = new Date().getTime();
      await driver.wait(until.elementLocated(By.className('lower-canvas')), 10).then(async (elm) => {
        end = new Date().getTime();
        let time = end - start;
        console.log(start, end, time);
        await assert.ok(time < TIME_OUT);
      });
    });
  });

  after(async function () { await driver.quit() });
}); 
