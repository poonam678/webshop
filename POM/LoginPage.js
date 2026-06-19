
import register from "../testData/register.json"

export class LoginPage{
    constructor(page){
        this.page=page
        this.loginLink=page.locator('//a[text()="Log in"]')
        this.email=page.locator('//input[@id="Email"]')
        this.password=page.locator('//input[@id="Password"]')
        this.loginButton=page.locator('//input[@value="Log in"]')

    }

    async login1(){
        await this.loginLink.click()
       await  this.email.fill(register.email)
        await this.password.fill(register.password)
        await this.loginButton.click()
    }

}