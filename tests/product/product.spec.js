
import {test} from "@playwright/test"
import register from "../../testData/register.json"
import product from "../../testData/product.json"
import { ProductSearch } from "../../POM/ProductPage"
import { LoginPage } from "../../POM/LoginPage"
import { LogoutPage } from "../../POM/LogoutPage"
import { RegisterPage } from "../../POM/RegisterPage"


// test("product search",async({page})=>{
//     await page.goto(register.url)
//     await page.locator('//a[text()="Log in"]').click()
//     await page.locator('//input[@id="Email"]').fill(register.email)
//     await page.locator('//input[@id="Password"]').fill(register.password)
//     await page.locator('//input[@value="Log in"]').click()

//     await page.locator('//input[@id="small-searchterms"]').fill(product.search)
//     await page.locator('//input[@type="submit"]').click()
//     await expect(page.locator('//a[text()="14.1-inch Laptop"]')).toHaveText("14.1-inch Laptop")
//     await expect(page.locator('//span[@class="price actual-price"]')).toHaveText("1590.00")
//     await page.locator('//img[@title="Show details for 14.1-inch Laptop"]').click()
//     await expect(page.locator('//span[text()="Availability: "]')).toHaveText("Availability: ")
//     await expect(page.locator('//span[text()="In stock"]')).toHaveText("In stock")
//     await page.locator('//input[@class="button-2 add-to-compare-list-button"]').click()
//     await page.locator('//a[@class="clear-list"]').click()
//     await expect(page.locator('//div[contains(text(), "You have no items to compare.    ")]')).toContainText("You have no items to compare.")
//      await page.locator('//a[text()="Log out"]').click()
// })


///>>Using POM 

test("using POM",async({page})=>{
  
  let productSearch=new ProductSearch(page)
  let registerpage = new RegisterPage(page)
  let login=new LoginPage(page)
    let logout=new LogoutPage(page)
     //await registerpage.registerUser()
     await page.goto(register.url)
     await login.login1()
     await productSearch.searchProduct()
    await logout.logout()
})