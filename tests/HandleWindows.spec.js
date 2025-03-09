const {test, expect}= require('@playwright/test')


test("Handle Multiple Windows", async function({browser}){
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login");


    const [newPage] = await Promise.all(
        [
           context.waitForEvent("page"), 
           page.locator("//div[@class='social']//*[contains(@href,'facebook')]").click()

        ]
    )
    await newPage.locator("//div[@role='dialog']//input[@name='email']").fill("anuj@gmail.com");
    //await page.pause();
    await newPage.close();
    await page.locator("//*[@id='email1']").fill("gupta@gmail.com");


})