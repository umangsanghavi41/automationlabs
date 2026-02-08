import{Page,Locator} from "@playwright/test"
export class MyAccount{
    private readonly header:Locator;
    private readonly page:Page;
    private readonly myAccountLink:Locator;
    private readonly logOutLink:Locator;
    private readonly logoutHeader:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.header=page.locator('h2:has-text("My Account")').nth(0);
        this.myAccountLink=page.locator("a[title='My Account']");
        this.logOutLink=page.locator('a:has-text("Logout")').nth(0);
        this.logoutHeader=page.locator('h1:has-text("Account Logout")');
    }
    async isMyAccountPageExists()
    {
        if (await this.header.isVisible())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    async clickLogoutLink()
    {
        await this.logOutLink.click();
    }
    async isLoggedOut()
    {
        if(await this.logoutHeader.isVisible())
        {
            return true;
        }
        else{
            return false;
        }
    }
}