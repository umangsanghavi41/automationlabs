import {test,expect} from "@playwright/test"
import { Homepage } from "../pages/Homepage"
import { DataProvider } from "../utils/Dataprovider"
import { TestConfig } from "../test.config"
import { MyAccount } from "../pages/MyAccountPage"
import { Login } from "../pages/Loginpage"
import { json } from "node:stream/consumers"
import { log } from "node:console"
 
//Load JSON data from file
const jsonpath="data/Logindata.json";
const jsonData=DataProvider.getDatafromJSON(jsonpath);

for(const data of jsonData)
{
    test(`Login with data:${data.testName}`,async({page})=>{
    const config=new TestConfig();
    const homepage=new Homepage(page);
    const loginpage=new Login(page);
    const myAccount=new MyAccount(page);
    await page.goto(config.url);
    await homepage.clickMyAccountLink();
    await homepage.clickLoginLink();
    await loginpage.fillEmail(data.email);
    await loginpage.fillPassword(data.password);
    await loginpage.clickLoginButton();
    if(data.expected.toLowerCase==='success')

        {
            const result=await myAccount.isMyAccountPageExists();
            expect(result).toBeTruthy();
        }
    else
    {
        const message=await loginpage.isErrorMessageVisible();
        expect(message).toBe(" Warning: No match for E-Mail Address and/or Password.");
    }
    })
}