
import register from "../testData/register.json"
import { selectOption } from "../utils/utils1"

// import {expect} from "@playwright/test"
export class AddressPage{
    constructor(page){
        this.page = page
        this.addressLink = page.locator('//a[@href="/customer/addresses"]')
        this.addAdressbutton = page.locator('//input[@class="button-1 add-address-button"]')
        this.firstName1 = page.locator('//input[@id="Address_FirstName"]')
        this.lastName1 = page.locator('//input[@id="Address_LastName"]')
        this.email =  page.locator('//input[@id="Address_Email"]')
       this.country = page.locator('//select[@id="Address_CountryId"]')
        this.city = page.locator('//input[@id="Address_City"]')
        this.address1 = page.locator('//input[@id="Address_Address1"]')
        this.postalCode = page.locator('//input[@id="Address_ZipPostalCode"]')
        this.phone = page.locator('//input[@id="Address_PhoneNumber"]')
        this.save = page.locator('//input[@value="Save"]')
    }

    async addAddress(){
       await   this.addressLink.click()
       await   this.addAdressbutton.click()
      await    this.firstName1.fill(register.firstName)
      await    this.lastName1.fill(register.lastName)
      await    this.email.fill(register.email)
      await   this.country.click()
       await   selectOption(this.page,'//select[@id="Address_CountryId"]','India')
        await  this.city.fill(register.city)
        await  this.address1.fill(register.address1)
        await  this.postalCode.fill(register.postalCode)
        await  this.phone.fill(register.phoneNumber)
        await  this.save.click()
    }
} 