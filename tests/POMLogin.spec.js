const {test,expect}= require('@playwright/test')
const LoginPageOR = require('../pages/loginpage')
const HomePageOR = require('../pages/homepage')


test("Login page Using POM", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    const loginPage = new LoginPageOR(page);
    await loginPage.loginToApplication("admin@email.com","admin@123");
    const homePage = new HomePageOR(page);
    await homePage.verifyManageOption();
    await homePage.signOutFromApplication();
})
