
export async function selectOption(page,locator,value){
    await page.locator(locator).selectOption(value)
}