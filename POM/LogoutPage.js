
export class LogoutPage{
    constructor(page){
        this.page = page
        this.logoutlink= page.locator('//a[@class="ico-logout"]')
    }
   async logout(){
     await this.page.waitForLoadState('networkidle');
    await this.logoutlink.waitFor({ state: 'visible', timeout: 10000 });
       await this.logoutlink.click()
    }
} 