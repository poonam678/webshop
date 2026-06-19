
import register from "../testData/register.json"
import review from "../testData/review.json"
import {selectOption} from "../utils/utils1"
import {expect} from "@playwright/test"

export class ReviewPage{
    constructor(page){

        this.page=page
        this.loginlink1loginlink1=page.locator('//a[text()="Log in"]')
        this.email1=page.locator('//input[@id="Email"]')
        this.password1=page.locator('//input[@id="Password"]')
        this.loginbutton=page.locator('//input[@value="Log in"]')
        this.books=page.locator('(//a[contains(text(),"Books")])[3]')
        //sorting 
        this.productName1=page.locator('//div[@class="product-item"]')
        this.products1=page.locator('//div[@class="product-item"]')
        this.pagination=page.locator('//a[contains(text(),"Next")]')
        this.productName3=page.locator('//h2[@class="product-title"]')
        this.booktitle=page.locator('//img[@title="Show details for Science"]')
        this.addreview=page.locator('//a[contains(text(),"Add your review")]')
        this.reviewtitle=page.locator('//input[@id="AddProductReview_Title"]')
        this.reviewdesc=page.locator('//textarea[@id="AddProductReview_ReviewText"]')
        this.rating=page.locator('//input[@id="addproductrating_4"]')
        this.submitreview=page.locator('//input[@value="Submit review"]')
        this.reviewmessage=page.locator('//div[@class="result"]')


    }

    async review(){

        await this.loginlink1loginlink1.click()
        await this.email1.fill(register.email)
        await this.password1.fill(register.password)
        await this.loginbutton.click()
        await this.books.click()
        //sorting 

        /*await selectOption(this.page,'//select[@id="products-orderby"]',"Name: A to Z")

        await selectOption(this.page,'//select[@id="products-pagesize"]',"4")*/

        await Promise.all([
  this.page.waitForURL(/orderby=5/),
  this.page.locator('#products-orderby').selectOption({ label: 'Name: A to Z' })
]);

await Promise.all([
  this.page.waitForURL(/pagesize=4/),
  this.page.locator('#products-pagesize').selectOption('4')
]);

await this.productName1.first().waitFor();

        
        //to get the number of propducts 
        const productName=await this.productName1.allTextContents()

        const products=await this.products1.count()

        console.log(products);

         await expect(products).toBe(4)

         await this.pagination.click()

         await expect(this.page).toHaveURL("https://demowebshop.tricentis.com/books?orderby=5&pagesize=4&pagenumber=2")

           console.log(this.page.url());

           const productName2=await this.productName3.allTextContents()

            await expect(productName2).not.toEqual(productName)

            await this.booktitle.click()
            await this.addreview.click()
            await this.reviewtitle.fill(review.Reviewtitle)
            await this.reviewdesc.fill(review.ReviewDesc)
            await this.rating.click()
            await  this.submitreview.click()
            await expect(this.reviewmessage).toHaveText("Product review is successfully added.")

    }
}