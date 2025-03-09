const {expect}= require('@playwright/test')

class HomePage{


    constructor(page){
        this.page = page;
        this.menu = "//*[@alt='menu']";
        this.manage = "//div[@class='nav-menu-item-manage']";
        this.signOut = "//button[text()='Sign out']";
    }

    async verifyManageOption(){
        await expect(this.page.locator(this.manage)).toBeVisible();
    }

    async signOutFromApplication(){
        await this.page.click(this.menu);
        await this.page.click(this.signOut);
    }
}

module.exports = HomePage;