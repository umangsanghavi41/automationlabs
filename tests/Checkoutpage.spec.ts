import{test,expect} from "@playwright/test"
import { Homepage } from "../pages/Homepage"
import { Search } from "../pages/Searchpage"
import { Productpage } from "../pages/Productpage"
import { Cart } from "../pages/Cartpage"
import { TestConfig } from "../test.config"
import { Checkout } from "../pages/Checkoutpage"

let homepage:Homepage;
let search:Search;
let product:Productpage;
let cart:Cart;
let config:TestConfig;
let checkout:Checkout;
test.beforeEach(async({page})=>{
    homepage=new Homepage(page);
    search=new Search(page);
    product=new Productpage(page);
    cart=new Cart(page);
    config=new TestConfig();
    checkout=new Checkout(page);
    await page.goto(config.url);
    await homepage.makeProductSearch(config.productname);
    await search.openProduct(config.productname);
    await product.addProducttoCart();
    await product.openMiniCart();
    await product.openCartPage();
})

test("Verify checkout page opens",async()=>{
    await cart.clickCheckoutButton();
    expect(checkout.verifyCheckOutPageExist).toBeTruthy();
})