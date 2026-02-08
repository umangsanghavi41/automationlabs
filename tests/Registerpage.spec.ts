import { test, expect } from "@playwright/test"
import { Homepage } from "../pages/Homepage"
import { Registration } from "../pages/Registerpage"
import { TestConfig } from "../test.config"
let homepage: Homepage;
let register: Registration;
let config: TestConfig;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    homepage = new Homepage(page);
    register = new Registration(page);
    await page.goto(config.url);
})
test.afterEach(async ({ page }) => {
    await page.close();
}
)
test('Validate user is able to register @master @sanity @regression', async () => {

    await homepage.clickMyAccountLink();
    await homepage.clickRegisterLink();
    await register.fillFirstName();
    await register.fillLastName();
    await register.fillEmail();
    await register.fillPhoneNumber();
    await register.fillPassword();
    await register.clickPrivacyPolicy();
    await register.clickContinueButton();
    const message = await register.verifySuccess();
    expect(message).toBe("Your Account Has Been Created!");
})