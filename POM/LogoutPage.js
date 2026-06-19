
export class LogoutPage{
    constructor(page){
        this.page = page
        this.logoutlink= page.locator('//a[text()="Log out"]')
    }
   async logout(){
       await this.logoutlink.click()
    }
} 