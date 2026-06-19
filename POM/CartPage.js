
import register from "../testData/register.json"
import cart from "../testData/cart.json"
import { expect } from "@playwright/test"

export class CartPage{
    constructor(page){
        this.page=page
        this.loginlink1loginlink1=page.locator('//a[text()="Log in"]')
       // this.email1=page.locator('//input[@id="Email"]')
        //this.password1=page.locator('//input[@id="Password"]')
        //this.loginbutton=page.locator('//input[@value="Log in"]')
        this.books=page.locator('(//a[contains(text(),"Books")])[3]')
        this.book1=page.locator('//a[text()="Computing and Internet"]/ancestor::div[@class="product-item"]/descendant::input[@value="Add to cart"]')
        this.book2=page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[2]')
        this.book3=page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[3]')
        this.cart=page.locator('(//span[@class="cart-label"])[1]')
        //to get product names and priceds 
        this.productNames1=page.locator('.product-name')
        //prices 
        this.unitPrices1=page.locator('.product-unit-price')
        this.quantityBoxes1=page.locator('.qty-input')
        //to increase the quantity 
        this.qty=page.locator('//input[@class="qty-input valid"]')
        this.update=page.locator('//input[@name="updatecart"]')
        this.total=page.locator('(//span[@class="nobr"]/ancestor::td[@class="cart-total-right"])[4]')
        this.remove=page.locator('(//input[@name="removefromcart"])[1]')
        this.logout=page.locator('//a[text()="Log out"]')

    }
    async cartUpdate(){
       
        //await this.loginlink1loginlink1.click()
        //await this.email.fill(register.email)
        //await this.password1.fill(register.password)
        //await this.loginbutton.click()
         await this.books.click()
       await  this.book1.click()
       await expect(
  this.page.locator('#bar-notification')
).toContainText('The product has been added');

        await this.book2.click()
        await expect(
  this.page.locator('#bar-notification')
).toContainText('The product has been added');

       /* await this.book3.click()
        await expect(
  this.page.locator('#bar-notification')
).toContainText('The product has been added');*/

        await  this.cart.click()


    }

    async cartValidate(){

       /* const productNames=await this.productNames1.allTextContents()
        console.log('Products:', productNames);
        
        await expect(productNames.length).toBe(2);

        const unitPrices=await  this.unitPrices1.allTextContents()
         console.log('Unit Prices:', unitPrices);

  expect(unitPrices.length).toBe(2);*/

  const quantityBoxes1=await this.quantityBoxes1
  //await this.qty.fill(cart.qty)
  await this.quantityBoxes1.first().fill(cart.qty);
 await this.update.click()
  //await expect(this.total).toHaveText("44.00")
  await  this.remove.check()
  await   await  this.update.click()
 await expect( this.total).toHaveText("Calculated during checkout")


    }
}