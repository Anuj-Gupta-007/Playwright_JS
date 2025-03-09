const {test,expect} = require('@playwright/test')

test("KeyBoard Actions", async function({page}){
    await page.goto("https://www.google.com/");
    await page.locator("//textarea[@name='q']").fill("Narender Modi!");
    
    await page.keyboard.press("Meta+A");
    await page.keyboard.press("Meta+C");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Meta+V");
    await page.waitForTimeout(3000);
    await page.keyboard.down("ArrowLeft");
    await page.keyboard.down("Shift");
    //await page.keyboard.up("Shift"); //Release the key
    for(let i = 0 ; i<5;i++){
        await page.keyboard.down("ArrowLeft");
    }
    await page.waitForTimeout(3000);
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(3000);
    const msg = await page.locator("textarea[name='q']").textContent();
    await page.waitForTimeout(3000);
    console.log(msg);

})