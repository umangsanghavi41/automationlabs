import{Page,Locator} from "@playwright/test"
export class Checkout{
    private readonly page:Page;
    private readonly checkOutHeader:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.checkOutHeader=page.locator('h1:has-text("Checkout")');
    }

    async verifyCheckOutPageExist()
    {
        return await this.checkOutHeader.isVisible(); 
    }
}