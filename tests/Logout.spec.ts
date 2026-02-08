import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Loginpage";
import { MyAccount } from "../pages/MyAccountPage";
import { TestConfig } from "../test.config";
import { Logout } from "../pages/Logout";
import {test,expect} from "@playwright/test"
import { log } from "node:console";

let config:TestConfig;
let homepage:Homepage;
let login:Login;
let myAccount:MyAccount;
let logout:Logout;

test.beforeEach(async({page})=>{
    config=new TestConfig();
    homepage=new Homepage(page);
    login=new Login(page);
    myAccount=new MyAccount(page);
    logout=new Logout(page);
    await page.goto(config.url);
})

test.afterEach(async({page})=>{
    await page.close();
})
test("Verify user is able to logout @regression @sanity", async({page})=>{
    await homepage.clickMyAccountLink();
    await homepage.clickLoginLink();
    await login.fillEmail(config.email);
    await login.fillPassword(config.password);
    await login.clickLoginButton();
    await homepage.clickMyAccountLink();
    await myAccount.clickLogoutLink();
    expect(myAccount.isLoggedOut).toBeTruthy();
    await logout.clickContinue();
    const homepagetitle=await homepage.verifyHomePage();
    expect(homepagetitle).toBe("Your Store");
})