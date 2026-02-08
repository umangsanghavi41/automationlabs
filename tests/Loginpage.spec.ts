import {test,expect} from "@playwright/test"
import { Homepage } from "../pages/Homepage"
import { Login } from "../pages/Loginpage"
import { TestConfig } from "../test.config"
import { MyAccount } from "../pages/MyAccountPage";
let config:TestConfig;
let homepage:Homepage;
let login:Login;
let myAccount:MyAccount;
test.beforeEach(async({page})=>{
    config=new TestConfig();
    homepage=new Homepage(page);
    login=new Login(page);
    myAccount=new MyAccount(page);
    await page.goto(config.url);
})
test.afterEach(async({page})=>{
    await page.close();
})
test("Validate user is able to login @master @sanity @regression",async()=>{
    await homepage.clickMyAccountLink();
    await homepage.clickLoginLink();
    await login.fillEmail(config.email);
    await login.fillPassword(config.password);
    await login.clickLoginButton();
    const message=await login.getMyAccountMsg();
    const result=myAccount.isMyAccountPageExists();
    expect(result).toBeTruthy();
   // expect(message).toBe("My Account");
})


