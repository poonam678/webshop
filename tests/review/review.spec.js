
import  {test} from "@playwright/test"
import register from "../../testData/register.json"
import { ReviewPage } from "../../POM/ReviewPage"
import {LogoutPage} from "../../POM/LogoutPage"





// test("review",async({page})=>{

//      await page.goto(register.url)
//     await page.locator('//a[text()="Log in"]').click()
//     await page.locator('//input[@id="Email"]').fill(register.email)
//     await page.locator('//input[@id="Password"]').fill(register.password)
//     await page.locator('//input[@value="Log in"]').click()
//     await page.locator('(//a[contains(text(),"Books")])[3]').click()

//     //sorting 

//     await page.locator('//select[@id="products-orderby"]').selectOption("Name: A to Z")
//     await page.locator('//select[@id="products-pagesize"]').selectOption("4")

//     //to get the number of products 
//     const productName=await page.locator('//div[@class="product-item"]').allTextContents()

//     const products=await page.locator('//div[@class="product-item"]').count()
//     console.log(products);
//   await expect(products).toBe(4)
//   await page.locator('//a[contains(text(),"Next")]').click()
//   await expect(page).toHaveURL("https://demowebshop.tricentis.com/books?orderby=5&pagesize=4&pagenumber=2")
//   console.log(page.url());

//   //different products are displayed 
//   const productName2=await page.locator('//h2[@class="product-title"]').allTextContents()

//   await expect(productName2).not.toEqual(productName)
//   await page.locator('//img[@title="Show details for Science"]').click()
//   await page.locator('//a[contains(text(),"Add your review")]').click()
//   await page.locator('//input[@id="AddProductReview_Title"]').fill("Review")
//   await page.locator('//textarea[@id="AddProductReview_ReviewText"]').fill("Good Book")
//   await page.locator('//input[@id="addproductrating_4"]').click()
//   await page.locator('//input[@value="Submit review"]').click()
//   await expect(page.locator('//div[@class="result"]')).toHaveText("Product review is successfully added.")
//     await page.locator('//a[text()="Log out"]').click()
// })

// ///******************************* */
// //***********using json *** */

// test("review using json",async({page})=>{

//      await page.goto(register.url)
//     await page.locator('//a[text()="Log in"]').click()
//     await page.locator('//input[@id="Email"]').fill(register.email)
//     await page.locator('//input[@id="Password"]').fill(register.password)
//     await page.locator('//input[@value="Log in"]').click()
//     await page.locator('(//a[contains(text(),"Books")])[3]').click()

//     //sorting 

//     await page.locator('//select[@id="products-orderby"]').selectOption("Name: A to Z")
//     await page.locator('//select[@id="products-pagesize"]').selectOption("4")

//     //to get the number of products 
//     const productName=await page.locator('//div[@class="product-item"]').allTextContents()

//     const products=await page.locator('//div[@class="product-item"]').count()
//     console.log(products);
//   await expect(products).toBe(4)
//   await page.locator('//a[contains(text(),"Next")]').click()
//   await expect(page).toHaveURL("https://demowebshop.tricentis.com/books?orderby=5&pagesize=4&pagenumber=2")
//   console.log(page.url());

//   //different products are displayed 
//   const productName2=await page.locator('//h2[@class="product-title"]').allTextContents()

//   await expect(productName2).not.toEqual(productName)
//   await page.locator('//img[@title="Show details for Science"]').click()
//   await page.locator('//a[contains(text(),"Add your review")]').click()
//   await page.locator('//input[@id="AddProductReview_Title"]').fill(review.Reviewtitle)
//   await page.locator('//textarea[@id="AddProductReview_ReviewText"]').fill(review.ReviewDesc)
//   await page.locator('//input[@id="addproductrating_4"]').click()
//   await page.locator('//input[@value="Submit review"]').click()
//   await expect(page.locator('//div[@class="result"]')).toHaveText("Product review is successfully added.")
//     await page.locator('//a[text()="Log out"]').click()
// })


// ///************************************ */
// ///using util methods 

// test("review using util",async({page})=>{

//      await page.goto(register.url)
//     await page.locator('//a[text()="Log in"]').click()
//     await page.locator('//input[@id="Email"]').fill(register.email)
//     await page.locator('//input[@id="Password"]').fill(register.password)
//     await page.locator('//input[@value="Log in"]').click()
//     await page.locator('(//a[contains(text(),"Books")])[3]').click()

//     //sorting 

//     //await page.locator('//select[@id="products-orderby"]').selectOption("Name: A to Z")
//     //using util methods
//     await selectOption(page,'//select[@id="products-orderby"]',"Name: A to Z")

//     //await page.locator('//select[@id="products-pagesize"]').selectOption("4")
//     await selectOption(page,'//select[@id="products-pagesize"]',"4")

//     //to get the number of products 
//     const productName=await page.locator('//div[@class="product-item"]').allTextContents()

//     const products=await page.locator('//div[@class="product-item"]').count()
//     console.log(products);
//   await expect(products).toBe(4)
//   await page.locator('//a[contains(text(),"Next")]').click()
//   await expect(page).toHaveURL("https://demowebshop.tricentis.com/books?orderby=5&pagesize=4&pagenumber=2")
//   console.log(page.url());

//   //different products are displayed 
//   const productName2=await page.locator('//h2[@class="product-title"]').allTextContents()

//   await expect(productName2).not.toEqual(productName)
//   await page.locator('//img[@title="Show details for Science"]').click()
//   await page.locator('//a[contains(text(),"Add your review")]').click()
//   await page.locator('//input[@id="AddProductReview_Title"]').fill(review.Reviewtitle)
//   await page.locator('//textarea[@id="AddProductReview_ReviewText"]').fill(review.ReviewDesc)
//   await page.locator('//input[@id="addproductrating_4"]').click()
//   await page.locator('//input[@value="Submit review"]').click()
//   await expect(page.locator('//div[@class="result"]')).toHaveText("Product review is successfully added.")
//     await page.locator('//a[text()="Log out"]').click()
// })

///Using POM ..............

test("using POM",async({page})=>{

 let reviewbook=new ReviewPage(page)
  

  let logout=new LogoutPage(page)


 await page.goto(register.url)
 await reviewbook.review()

  await logout.logout()

})