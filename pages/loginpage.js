class LoginPage{

    constructor(page){ //Created a parameterised Constructor which takes page as argument and 
        // Once we create object of this class, constructor will be called and locator will be initialising
        this.page = page; //initialising page in the current class and locators of the Login Page
        this.username = "//*[@id='email1']";
        this.password = "//*[@id='password1']";
        this.loginButton = "//*[@id='login_container']/form/div/button";
    }


    async loginToApplication(userName,password){
        await this.page.fill(this.username, userName);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginButton);
    }
}

module.exports=LoginPage;