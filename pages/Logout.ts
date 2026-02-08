import {Page,Locator} from "@playwright/test"
export class Logout{
    private readonly page:Page;
    private readonly continueButton:Locator;
    private readonly logoutHeader:Locator;

    
    constructor(page:Page)
    {
        this.page=page;
        this.continueButton=page.locator(".btn-primary");
        this.logoutHeader=page.locator('h1:has-text("Account Logout")');

    }

    async logOutPageExists()
    {
        if(await this.logoutHeader.isVisible())
        {
            return true;
        }
        else{
            return false;
        }
    }
    async clickContinue()
    {
        await this.continueButton.click();
    }
}