const {test, expect} = require('@playwright/test')

test("Waiting for Load State", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.locator("//a[@class='subLink']").click();
    await page.waitForLoadState("networkidle");
    let checkboxCount = await page.locator("//div[@class='interests-div']/div").count();
    expect(checkboxCount).toBe(3);
})