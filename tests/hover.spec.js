const {test,expect}= require('@playwright/test')

test("Hover over an element", async function({page}){

    await page.goto("https://www.flipkart.com");
    await page.locator("//*[text()='Electronics']").hover();
    await page.waitForTimeout(2000);
    await page.locator("//a[text()='Electronics GST Store']").hover();
    //await page.getByRole("a",{name:"Electronics GST Store"}).hover();
    await page.waitForTimeout(2000);
    await page.locator("//a[text()='Electronics GST Store']").click();
    await page.waitForTimeout(5000);


})




// const {test,expect, chromium}= require('@playwright/test')

// test("Hover over an element", async function({page}){
//   const browser = await chromium.launch();
  
//   // Create first context (first user)
//   const context1 = await browser.newContext();
//   const page1 = await context1.newPage();
//   await page1.goto('https://www.youtube.com/');
//   console.log(await page1.title());
  
//   // Create second context (second user)
//   const context2 = await browser.newContext();
//   const page2 = await context2.newPage();
//   await page2.goto('https://translate.google.com/');
//   console.log(await page2.title());

//   await browser.close();
// })

