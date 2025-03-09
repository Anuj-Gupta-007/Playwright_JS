const {test,expect} = require('@playwright/test');

test.use({viewport:{width:1500,height:1000}})

test("LoginPage", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);
    await page.locator("//input[@name='username']").fill("Admin", {delay:500});
    await page.locator("//input[@name='password']").fill("admin12322", {delay:100});
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL(/dashboard/);
    const text = await page.locator("//div[@class='oxd-topbar-header-title']/span/h6").textContent("div");
    console.log(text);
    await page.getByAltText("profile picture").click();
    await page.getByText("Logout").click();
    await expect(page).toHaveURL(/login/);
    await page.waitForTimeout(2000);
    const title = await page.locator("//div[@class='orangehrm-login-slot-wrapper']//h5").textContent();
    console.log(title);
    await page.locator("//input[@name='username']").fill("Admin", {delay:500});
    await page.locator("//input[@name='password']").fill("admin1234", {delay:100});
    await page.locator("//button[@type='submit']").click();
    const errorMessage = await page.locator("//p[contains(@class,'oxd-alert-content-text')]").textContent();
    console.log("Error Message is: "+ errorMessage);
    expect(errorMessage.includes("Invalid credentials")).toBeTruthy();
})


test.only("Handle Dropdown", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.locator('#state').selectOption({label:"Delhi"});
    await page.waitForTimeout(3000);
    await page.locator('#state').selectOption({value:"Goa"});
    await page.locator('#state').selectOption({index:7});

   const dropdownValue = await page.locator("#state").textContent();
   console.log("State Options: " + dropdownValue);
   expect(dropdownValue.includes("Kerala")).toBeTruthy();


   ///// Fetch list of values from dropdown
    let stateDropdown= await page.$("#state"); 
    let stateNames = await stateDropdown.$$("option"); 
    console.log(stateNames)

    let status = false;

    for(let i= 0 ; i<stateNames.length ; i++){
        let stateName = await stateNames[i].textContent();
        console.log("Values are "+stateName);
        if(stateName.includes("Goa")){
            console.log("State Found");
            status = true;
            break;
        }
    }
    await expect(status).toBeTruthy();
    //multiselect dropdown

    await page.locator("#hobbies").selectOption(['Playing','Swimming','Dancing'])
    await page.waitForTimeout(3000);

})
