const {test, expect} = require('@playwright/test');

test("Google", async function({page}){

    await page.goto("https://www.google.com/");
    const Title = await page.title();
    expect(Title).toBe("Google");
    await expect(page).toHaveTitle("Google");
    console.log("Hi")
})