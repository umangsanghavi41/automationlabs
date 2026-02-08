import{Page,Locator} from "@playwright/test"
import { Checkout } from "./Checkoutpage";
export class Cart{
    private readonly page:Page;
    private readonly cartHeader:Locator;
    private readonly total:Locator;
    private readonly checkoutButton:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.cartHeader=page.locator('.breadcrumb a', {hasText:'Shopping Cart'});
        this.total=page.locator(".table-responsive tbody td").nth(5);
        this.checkoutButton=page.locator(".pull-right .btn-primary");
    }
    async isCartPageExists()
    {
        return await(this.cartHeader.isVisible());
    }

    async getCartTotal()
    {
        return await this.total.textContent();
    }
    async clickCheckoutButton()
    {
        await this.checkoutButton.click();
        return new Checkout(this.page);
    }
}   