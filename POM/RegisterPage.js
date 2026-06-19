import register from "../testData/register.json"

export class RegisterPage{
    constructor(page){
        this.page = page
        this.registerLink = page.locator('//a[text()="Register"]')
        this.gender = page.locator('//input[@id="gender-female"]')
        this.firstName2 = page.locator('//input[@id="FirstName"]')
        this.lastName2 = page.locator('//input[@id="LastName"]')
        this.email = page.locator('//input[@id="Email"]')
        this.password = page.locator('//input[@id="Password"]')
        this.confirmPassword = page.locator('//input[@id="ConfirmPassword"]')
        this.registerButton = page.locator('//input[@id="register-button"]')
        this.continue = page.locator('//input[@class="button-1 register-continue-button"]')
        this.newsLetter = page.locator('//input[@id="newsletter-email"]')
        this.subscribeButton = page.locator('//input[@value="Subscribe"]')
        

    }
    async registerUser(){
       await this.registerLink.click()
       await this.gender.check()
      await  this.firstName2.fill(register.firstName)
       await this.lastName2.fill(register.lastName)
     await   this.email.fill(register.email)
     await   this.password.fill(register.password)
     await   this.confirmPassword.fill(register.confirmPassword)
     await   this.registerButton.click()
     await expect(this.continue).toBeVisible({ timeout: 10000 });
      await  this.continue.click()
     await   this.newsLetter.fill(register.email)
     await   this.subscribeButton.click()

    }
} 