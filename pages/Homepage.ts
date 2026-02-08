import{Page,expect,Locator} from "@playwright/test"
export class Homepage{

    //locators

    private readonly myAccountLink:Locator;
    private readonly registerLink:Locator;
    private readonly loginLink:Locator;
    private readonly searchBox:Locator;
    private readonly searchButton:Locator;
    private readonly page:Page;
    
    //constructor
    constructor(page:Page)
    {
        this.page=page;
        this.myAccountLink=page.locator("a[title='My Account']");
        this.registerLink=page.locator('a:has-text("Register")');
        this.loginLink=page.locator('a:has-text("Login")');
        this.searchBox=page.locator("input[name='search']");
        this.searchButton=page.locator(".input-group-btn i");
    }

    //action methods
    async verifyHomePage()
    {
        return await this.page.title();
    }
    async clickMyAccountLink()
    {
        await this.myAccountLink.click();
    }

    async clickRegisterLink()
    {
        await this.registerLink.click();
    }
    async clickLoginLink()
    {
        await this.loginLink.click();
    }

    async makeProductSearch(productName:string)
    {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }
}