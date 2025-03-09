const {test, expect} = require('@playwright/test')
const jsonObject = JSON.parse(JSON.stringify(require("../tests/testdata.json")))
const userData = JSON.parse(JSON.stringify(require("../tests/userData.json")))

test.skip("Pass Single Data", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.locator("//*[@id='email1']").fill(jsonObject.userName);
    await page.locator("//*[@id='password1']").fill(jsonObject.password);
})


test.describe("Data Driven Login Test", function()
{       
    for(const testData of userData){
        test.describe(`Login with users ${testData.id}`, function(){
            test('Login to Application', async function({page}){
                await page.goto("https://freelance-learn-automation.vercel.app/login");
                await page.locator("//*[@id='email1']").fill(testData.userName);
                await page.locator("//*[@id='password1']").fill(testData.password);
            })
        })
    }
})