
import {test} from "@playwright/test"
import register from "../../testData/register.json"

import { LoginPage } from "../../POM/LoginPage"
import { CartPage } from "../../POM/CartPage"
import { RegisterPage } from "../../POM/RegisterPage"
import { LogoutPage } from "../../POM/LogoutPage"

// test("cart",async({page})=>{

//      await page.goto(register.url)
//     await page.locator('//a[text()="Log in"]').click()
//     await page.locator('//input[@id="Email"]').fill(register.email)
//     await page.locator('//input[@id="Password"]').fill(register.password)
//     await page.locator('//input[@value="Log in"]').click()
//     await page.locator('(//a[contains(text(),"Books")])[3]').click()
//     await page.locator('//a[text()="Computing and Internet"]/ancestor::div[@class="product-item"]/descendant::input[@value="Add to cart"]').click()
//     await page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[2]').click()
//     await page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[3]').click()
//     await page.locator('(//span[@class="cart-label"])[1]').click()

//     //...to get the product nameds and pricesz and quantiies 

//     const productNames = await page.locator('.product-name').allTextContents();

//   console.log('Products:', productNames);

//   expect(productNames.length).toBe(3);

// // Verify unit prices
// const unitPrices = await page.locator('.product-unit-price').allTextContents();

//   console.log('Unit Prices:', unitPrices);

//   expect(unitPrices.length).toBe(3);
// // Verify quantity input boxes
// const quantityBoxes = page.locator('.qty-input');

// //to increase the quantity 
// //await page.locator('(//input[@value="1"])[1]').fill("")
// await page.locator('(//input[@value="1"])[1]').fill("2")
// await page.locator('//input[@name="updatecart"]').click()
// await page.waitForTimeout(4000)
// //await expect(page.locator('//input[@value="2"]')).toHaveText("2")

//  await expect(page.locator('(//span[@class="nobr"]/ancestor::td[@class="cart-total-right"])[4]')).toHaveText("54.00")

//  await page.locator('(//input[@name="removefromcart"])[1]').check()
//  await page.locator('//input[@name="updatecart"]').click()
//  await expect(page.locator('(//span[@class="nobr"]/ancestor::td[@class="cart-total-right"])[4]')).toHaveText("Calculated during checkout")
// await page.locator('//a[text()="Log out"]').click()

// })



// /*********************************************************** */
// /*******Using Jason************* */

// test("cart using json",async({page})=>{

//      await page.goto(register.url)
//     await page.locator('//a[text()="Log in"]').click()
//     await page.locator('//input[@id="Email"]').fill(register.email)
//     await page.locator('//input[@id="Password"]').fill(register.password)
//     await page.locator('//input[@value="Log in"]').click()
//     await page.locator('(//a[contains(text(),"Books")])[3]').click()
//     await page.locator('//a[text()="Computing and Internet"]/ancestor::div[@class="product-item"]/descendant::input[@value="Add to cart"]').click()
//     await page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[2]').click()
//     await page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[3]').click()
//     await page.locator('(//span[@class="cart-label"])[1]').click()

//     //...to get the product nameds and pricesz and quantiies 

//     const productNames = await page.locator('.product-name').allTextContents();

//   console.log('Products:', productNames);

//   expect(productNames.length).toBe(3);

// // Verify unit prices
// const unitPrices = await page.locator('.product-unit-price').allTextContents();

//   console.log('Unit Prices:', unitPrices);

//   expect(unitPrices.length).toBe(3);
// // Verify quantity input boxes
// const quantityBoxes = page.locator('.qty-input');

// //to increase the quantity 
// //await page.locator('(//input[@value="1"])[1]').fill("")
// await page.locator('(//input[@value="1"])[1]').fill(cart.qty)
// await page.locator('//input[@name="updatecart"]').click()
// await page.waitForTimeout(4000)
// //await expect(page.locator('//input[@value="2"]')).toHaveText("2")

//  await expect(page.locator('(//span[@class="nobr"]/ancestor::td[@class="cart-total-right"])[4]')).toHaveText("54.00")

//  await page.locator('(//input[@name="removefromcart"])[1]').check()
//  await page.locator('//input[@name="updatecart"]').click()
//  await expect(page.locator('(//span[@class="nobr"]/ancestor::td[@class="cart-total-right"])[4]')).toHaveText("Calculated during checkout")
// await page.locator('//a[text()="Log out"]').click()
// }) */

///....Using pOM class 

test("using POM",async({page})=>{

  let cartpage=new CartPage(page)
  let registerpage=new RegisterPage(page)
  let login=new LoginPage(page)
  let logout=new LogoutPage(page)

 await page.goto(register.url)
 await login.login1()
  await cartpage.cartUpdate()
  await cartpage.cartValidate()
  await logout.logout()

})