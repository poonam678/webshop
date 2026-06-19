
import {test} from "@playwright/test"
import register from "../../testData/register.json"

//import { selectOption } from "../../utils/utils1"
import { AddressPage } from "../../POM/AddressPage"
import { RegisterPage } from "../../POM/RegisterPage"
import { LogoutPage } from "../../POM/LogoutPage"

// test("register",async({page})=>{
//     await page.goto("https://demowebshop.tricentis.com/")
//     await page.locator('//a[text()="Register"]').click()
//     await page.locator('//input[@id="gender-female"]').check()
//     await page.locator('//input[@id="FirstName"]').fill("vani")
//     await page.locator('//input[@id="LastName"]').fill("deshpande")
//     await page.locator('//input[@id="Email"]').fill("vanideshpande@gmail.com")
//     await page.locator('//input[@id="Password"]').fill("L$47HDijy6k$Sq")
//     await page.locator('//input[@id="ConfirmPassword"]').fill("L$47HDijy6k$Sq")
//     await page.locator('//input[@id="register-button"]').click()

//     await page.waitForTimeout(2000)
//     await page.locator('(//input[@type="button"])[2]').click()
//     await page.locator('//input[@id="newsletter-email"]').fill("vanideshpande@gmail.com")
//     await page.locator('//input[@value="Subscribe"]').click()
//     await page.locator('//a[@href="/customer/addresses"]').click()
//     await page.locator('//input[@class="button-1 add-address-button"]').click()

//     await page.locator('//input[@id="Address_FirstName"]').fill("vani")
//     await page.locator('//input[@id="Address_LastName"]').fill("deshpande")
//     await page.locator('//input[@id="Address_Email"]').fill("vanideshpande@gmail.com")
//     await page.locator('//select[@id="Address_CountryId"]').click()
//     await page.locator('//select[@id="Address_CountryId"]').selectOption({value:"41"})
//     await page.locator('//select[@id="Address_StateProvinceId"]').selectOption({value :"0"})
//     await page.locator('//input[@id="Address_City"]').fill("Bangalore")
//     await page.locator('//input[@id="Address_Address1"]').fill("jalahalli")
//     await page.locator('//input[@id="Address_ZipPostalCode"]').fill("500567")
//     await page.locator('//input[@id="Address_PhoneNumber"]').fill("9876545678")
//     await page.locator('//input[@value="Save"]').click()
// })


// /********************************************************************************/
// /************ Using Json */



// test("register using jason",async({page})=>{
//     await page.goto(register.url)
//     await page.locator('//a[text()="Register"]').click()
//     await page.locator('//input[@id="gender-female"]').check()
//     await page.locator('//input[@id="FirstName"]').fill(register.firstName)
//     await page.locator('//input[@id="LastName"]').fill(register.lastName)
//     await page.locator('//input[@id="Email"]').fill(register.email)
//     await page.locator('//input[@id="Password"]').fill(register.password)
//     await page.locator('//input[@id="ConfirmPassword"]').fill(register.confirmPassword)
//     await page.locator('//input[@id="register-button"]').click()

//     await page.waitForTimeout(2000)
//     await page.locator('(//input[@type="button"])[2]').click()
//     await page.locator('//input[@id="newsletter-email"]').fill(register.email)
//     await page.locator('//input[@value="Subscribe"]').click()
//     await page.locator('//a[@href="/customer/addresses"]').click()
//     await page.locator('//input[@class="button-1 add-address-button"]').click()

//     await page.locator('//input[@id="Address_FirstName"]').fill(register.firstName)
//     await page.locator('//input[@id="Address_LastName"]').fill(register.lastName)
//     await page.locator('//input[@id="Address_Email"]').fill(register.email)
//     await page.locator('//select[@id="Address_CountryId"]').click()
//     await page.locator('//select[@id="Address_CountryId"]').selectOption({value:"41"})
//     await page.locator('//select[@id="Address_StateProvinceId"]').selectOption({value :"0"})
//     await page.locator('//input[@id="Address_City"]').fill(register.city)
//     await page.locator('//input[@id="Address_Address1"]').fill(register.address1)
//     await page.locator('//input[@id="Address_ZipPostalCode"]').fill(register.postalCode)
//     await page.locator('//input[@id="Address_PhoneNumber"]').fill(register.phoneNumber)
//     await page.locator('//input[@value="Save"]').click()
//     await page.locator('//a[text()="Log out"]').click()
// })


// ///*************************************** */
// ///************ Using Util files  */

// test("register using util",async({page})=>{
//     await page.goto(register.url)
//     await page.locator('//a[text()="Register"]').click()
//     await page.locator('//input[@id="gender-female"]').check()
//     await page.locator('//input[@id="FirstName"]').fill(register.firstName)
//     await page.locator('//input[@id="LastName"]').fill(register.lastName)
//     await page.locator('//input[@id="Email"]').fill(register.email)
//     await page.locator('//input[@id="Password"]').fill(register.password)
//     await page.locator('//input[@id="ConfirmPassword"]').fill(register.confirmPassword)
//     await page.locator('//input[@id="register-button"]').click()

//     await page.waitForTimeout(2000)
//     await page.locator('(//input[@type="button"])[2]').click()
//     await page.locator('//input[@id="newsletter-email"]').fill(register.email)
//     await page.locator('//input[@value="Subscribe"]').click()
//     await page.locator('//a[@href="/customer/addresses"]').click()
//     await page.locator('//input[@class="button-1 add-address-button"]').click()

//     await page.locator('//input[@id="Address_FirstName"]').fill(register.firstName)
//     await page.locator('//input[@id="Address_LastName"]').fill(register.lastName)
//     await page.locator('//input[@id="Address_Email"]').fill(register.email)
//     await page.locator('//select[@id="Address_CountryId"]').click()
//    // await page.locator('//select[@id="Address_CountryId"]').selectOption({value:"41"})
//    //using util methods
//    await selectOption(page,'//select[@id="Address_CountryId"]','India')
//     //await page.locator('//select[@id="Address_StateProvinceId"]').selectOption({value :"0"})
//     //using util methods
//     //await selectOption(page,'//select[@id="Address_StateProvinceId"]','{value :"0"}')
//     await page.locator('//input[@id="Address_City"]').fill(register.city)
//     await page.locator('//input[@id="Address_Address1"]').fill(register.address1)
//     await page.locator('//input[@id="Address_ZipPostalCode"]').fill(register.postalCode)
//     await page.locator('//input[@id="Address_PhoneNumber"]').fill(register.phoneNumber)
//     await page.locator('//input[@value="Save"]').click()
//     await page.locator('//a[text()="Log out"]').click()
// })


///********************************************** */
///USing POM //////
test("using pom",async({page})=>{

    //adding changes


    let addresspage = new AddressPage(page)
    let registerpage = new RegisterPage(page)
    let logoutpage = new LogoutPage(page)
//final trying 
    await page.goto(register.url)
    await registerpage.registerUser()
    await addresspage.addAddress()
    await logoutpage.logout()
}) 