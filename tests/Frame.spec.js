const {test, expect}= require('@playwright/test')


test("Handle Frames", async function({page}){

    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    const iframe = page.frameLocator("//frame[@name='packageListFrame']");
    await iframe.locator("//a[text()='java.applet']").click();
    await page.pause();

})
