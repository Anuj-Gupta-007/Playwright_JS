const{test,expect} = require('@playwright/test')

test("FileUpload", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("#file-upload").setInputFiles("./uploads/simpleFile.jpg");
    await page.waitForTimeout(3000);
    await page.locator("#file-submit").click();
    const message = await page.locator("//h3[text()='File Uploaded!']").textContent();
    expect(message.includes("File Uploaded!")).toBeTruthy();
})