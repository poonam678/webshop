
export class LogoutPage{
    constructor(page){
        this.page = page
        this.logoutlink= page.locator('//a[@class="ico-logout"]')
    }
   async logout(){
       await this.logoutlink.click()
    }
} 