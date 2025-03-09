const {test,expect}= require('@playwright/test')

test.skip("Handle Alert", async function({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (d) =>{
        expect(d.type()).toContain("alert");
        await page.waitForTimeout(2000);
        expect(d.message()).toContain("I am a JS Alert");
        await page.waitForTimeout(2000);
        await d.accept();
    })
    await page.locator("//button[text()='Click for JS Alert']").click();

})

test.skip("Handle Confirm Box", async function({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialogWindow) =>{
        expect(dialogWindow.type()).toContain("confirm"); // type I'll get should be confirm
        await page.waitForTimeout(2000);
        expect(dialogWindow.message()).toContain("I am a JS Confirm");
        await page.waitForTimeout(2000);
        await dialogWindow.dismiss();
    
    })
    await page.locator("//button[text()='Click for JS Confirm']").click();

})

test("Handle Prompt Box", async function({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialogWindow) =>{
        expect(dialogWindow.type()).toContain("prompt"); // type I'll get should be prompt
        //await page.waitForTimeout(2000);
        expect(dialogWindow.message()).toContain("I am a JS prompt");
        //await page.waitForTimeout(2000);
        await dialogWindow.accept("Anuj");
    
    })
    await page.locator("//button[text()='Click for JS Prompt']").click();
    await page.waitForTimeout(5000);

})
