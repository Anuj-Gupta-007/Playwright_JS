
const {test,expect} =  require('@playwright/test');

test("Handle Suggestions", async function({page}){
    await page.goto("https://www.flipkart.com/");
    await page.getByPlaceholder("Search for Products, Brands and More").fill("iphone 16");

    await page.waitForSelector("//form[contains(@class,'header-form-search')]//ul/li");
    let suggestion = await page.$$("//form[contains(@class,'header-form-search')]//ul/li");

    for(let i = 0; i< suggestion.length; i++){
        let text = await suggestion[i].textContent();
        if(text.includes('plus  ')){
            await page.waitForTimeout(5000);
            await suggestion[i].click();
            break;
        }
    }
    await page.waitForTimeout(5000);

})