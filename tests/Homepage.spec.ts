import{test,expect} from "@playwright/test"
import { Homepage } from "../pages/Homepage"
import { TestConfig } from "../test.config"

test('Validate user is able to click links', async({page})=>{
    const config=new TestConfig();
    const homepage=new Homepage(page);
    await page.goto(config.url);
    await homepage.clickMyAccountLink();
    await homepage.clickRegisterLink();
    const title=await page.title();
    expect(title).toBe("Register Account");
    console.log("TC pass");
})