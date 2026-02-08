import{Page,Locator} from "@playwright/test"
export class Cart{
    private readonly page:Page;
    private readonly cartHeader:Locator;
    private readonly total:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.cartHeader=page.locator('.breadcrumb a', {hasText:'Shopping Cart'});
        this.total=page.locator(".table-responsive tbody td").nth(5);
    }
    async isCartPageExists()
    {
        return await(this.cartHeader.isVisible());
    }
}