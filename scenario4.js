const { webdriver, Builder, By, Key, until } = require('selenium-webdriver'),
  test = require('./testing/index.js'),
  assert = require('assert'),
  Origin = require('selenium-webdriver/lib/input');

let driver;

// describe('Yes Option Selected', function () {
//   let initialImgStr = '';
//   before(async function () {
//     driver = new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:4200/?taskId=12d2aca9-68d0-11ea-936c-0a16f1679cc9');
//     initialImgStr = await driver.executeScript('return document.querySelector(".lower-canvas").toDataURL();')

//     // await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2'))));
//     // await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[1]')).click();
//   });

//   // it('01 Submit Button Enabled', async function () {
//   //   const isEnabled = await driver.findElement(By.id('submit-button')).isEnabled();
//   //   await assert.equal(isEnabled, true);
//   // });

//   // it('02 "Please press SUBMIT" text is shown', async function () {
//   //   const textIsPresented = await driver.findElement(By.id('nextPrompt')).getText();
//   //   await assert.equal(!!textIsPresented, true);
//   // });

//   it('03 User Can Not Draw', async function () {
//     // driver.actions()
//     // const script = 'var c = document.querySelector(".lower-canvas"); var ctx = c.getContext("2d"); ctx.fillStyle = "black"; ctx.strokeStyle = "blue"; ctx.fillText("automation user",10,90); ctx.fillRect(0,10,100,100);';
//     // await driver.executeScript(script).then(null, async function (err) {
//     //   await assert.equal(false, true);
//     // });
//     // await assert.equal(true, true);
//     var actions = driver.actions({ bridge: true });

//     // actions.mouseMove() .move({ x: 750, y: 170, origin: Origin.VIEWPORT }).press().move({ x: 820, y: 200, origin: Origin.VIEWPORT }).release().perform();
//     // const imgStr = await driver.executeScript('return document.querySelector(".lower-canvas").toDataURL();')
//     // await assert.equal(initialImgStr, imgStr);
//     // await driver.findElement(By.xpath('//app-delete-widget')).then(async function(elem){
//       // code
//       var elem = await driver.findElement(By.xpath('//app-delete-widget'));
// 			await actions.move({duration:5000,origin:elem,x:0,y:0}).press().perform();  
//       await driver.sleep(5000);
//       // code
// 			// await driver.quit();
// 		// });
//   });



//   after(async function () { await driver.quit() });
// }); 

describe('Yes Option Selected', function () {
  before(async function () {
    driver = new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:4200/?taskId=12d2aca9-68d0-11ea-936c-0a16f1679cc9');
    // click YES
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('mat-radio-2'))));
    await driver.findElement(By.xpath('//mat-radio-group/mat-radio-button[1]')).click();
    // select Pedestrian option
    await driver.findElement(By.xpath('//mat-select')).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//mat-option[2]'))));
    await driver.findElement(By.xpath('//mat-option[2]')).click();
    await driver.findElement(By.xpath('//app-draw-bbcl-widget')).click();

  });

  // it('01 Submit Button Enabled', async function () {
  //   const isEnabled = await driver.findElement(By.id('submit-button')).isEnabled();
  //   await assert.equal(isEnabled, true);
  // });

  it('01 "Please press SUBMIT" text is shown', async function () {
    await driver.findElement(By.xpath('//app-next-steps')).then(present => assert.equal(!!present, true));
  });

  it('03 User Can Not Draw', async function () {
    // driver.actions()
    // const script = 'var c = document.querySelector(".lower-canvas"); var ctx = c.getContext("2d"); ctx.fillStyle = "black"; ctx.strokeStyle = "blue"; ctx.fillText("automation user",10,90); ctx.fillRect(0,10,100,100);';
    // await driver.executeScript(script).then(null, async function (err) {
    //   await assert.equal(false, true);
    // });
    // await assert.equal(true, true);
    // var actions = driver.actions({ bridge: true });

    // actions.mouseMove() .move({ x: 750, y: 170, origin: Origin.VIEWPORT }).press().move({ x: 820, y: 200, origin: Origin.VIEWPORT }).release().perform();
    // const imgStr = await driver.executeScript('return document.querySelector(".lower-canvas").toDataURL();')
    // await assert.equal(initialImgStr, imgStr);
    // await driver.findElement(By.xpath('//app-delete-widget')).then(async function(elem){
    // code
    // var elem = await driver.findElement(By.xpath('//app-delete-widget'));
    // await actions.move({duration:5000,origin:elem,x:0,y:0}).press().perform();  
    // await driver.sleep(5000);
    // code
    // await driver.quit();
    // });
  });



  after(async function () { await driver.quit() });
}); 
