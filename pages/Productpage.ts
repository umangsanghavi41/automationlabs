import{Page,Locator} from "@playwright/test"
import { Cart } from "./Cartpage";
export class Productpage{
    private readonly page:Page;
    private readonly productHeader:Locator;
    private readonly addToCartButton:Locator;
    private readonly successMsg:Locator;
    private readonly cartButton:Locator;
    private readonly miniCart:Locator;
    private readonly total:Locator;
    private readonly cartLink:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.productHeader=page.locator("h1");
        this.addToCartButton=page.locator("#button-cart");
        this.successMsg=page.locator(".alert-success");
        this.cartButton=page.locator("#cart")
        this.miniCart=page.locator("#cart .dropdown-menu")
        this.total=page.locator(".table-bordered tr td").nth(7);
        this.cartLink=page.locator(".fa-shopping-cart").nth(2);
    }

    async productPageExists()
    {
        if(await this.productHeader.isVisible())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    async addProducttoCart()
    {
        await this.addToCartButton.click();
    }
    async verifySuccessMessage()
    {
        if(await this.successMsg.isVisible())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    async openMiniCart()
    {
        await this.cartButton.click(); 
    }

   
    async getTotal()
    {
        return await this.total.textContent();
    }
    async verifyMiniCartOpens()
    {
        if(await this.miniCart.isVisible())
        {
            return true;
        }
        else
        {
            throw new Error("Minicart not visible");
        }
    }
    async openCartPage()
    {
        await this.cartLink.click();
        return new Cart(this.page);
    }
}