import {Page,Locator} from "@playwright/test"

export class Search{
    private readonly page:Page;
    private readonly searchHeader:Locator;
    private readonly productNumber:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.searchHeader=page.locator('h1:has-text("Search - )');
        this.productNumber=page.locator("h4>a");
    }

    async verifySearchPage()
    {
        if(await this.searchHeader.isVisible())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    async openProduct(productName:string)
    {
        const count=await this.productNumber.count();
        for(let i=0;i<count;i++)
        {
            const productTitle=await this.productNumber.nth(i).textContent();
            if(productTitle===productName)
            {
                console.log(productTitle);
                await this.productNumber.nth(i).click();
                return;
            }
            throw new Error("No product found");
        }
    }
}