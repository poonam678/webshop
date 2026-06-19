
import { expect } from "@playwright/test"
import product from "../testData/product.json"
import register from "../testData/register.json"



export class ProductSearch{
    constructor(page){
        this.page=page
        this.search=page.locator('//input[@id="small-searchterms"]')
        this.submitSearch=page.locator('//input[@class="button-1 search-box-button"]')
        this.result=page.locator('//a[text()="14.1-inch Laptop"]')
        this.price=page.locator('//span[@class="price actual-price"]')
        this.product=page.locator('//img[@title="Show details for 14.1-inch Laptop"]')
        this.availability=page.locator('//span[text()="Availability: "]')
        this.stock=page.locator('//span[text()="In stock"]')
        this.compare=page.locator('//input[@class="button-2 add-to-compare-list-button"]')
        this.clear=page.locator('//a[@class="clear-list"]')
        this.emptyCart=page.locator('//div[contains(text(), "You have no items to compare.    ")]')

    }

    async searchProduct(){
       await  this.search.fill(product.search)
       await  this.submitSearch.click()
        await expect(this.result).toHaveText("14.1-inch Laptop")

   await expect( this.price).toHaveText("1590.00")
   await this.product.click()
    await expect(this.availability).toHaveText("Availability: ")
     await expect(this.stock).toHaveText("In stock")
    await  this.compare.click()
    await this.clear.click()
    await expect(this.emptyCart).toContainText("You have no items to compare.")



    }
}