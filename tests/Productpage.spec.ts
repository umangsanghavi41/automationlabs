import{test,expect} from "@playwright/test"
import { Homepage} from "../pages/Homepage"
import { Search } from "../pages/Searchpage"
import { Productpage } from "../pages/Productpage"
import { TestConfig } from "../test.config"
import { Cart } from "../pages/Cartpage"

let homepage:Homepage;
let search:Search;
let productpage:Productpage;
let config:TestConfig;
let cart:Cart;
test.beforeEach(async({page})=>{
    homepage=new Homepage(page);
    search=new Search(page);
    productpage=new Productpage(page);
    config=new TestConfig();
    cart=new Cart(page);
    await page.goto(config.url);
})

test.afterEach(async({page})=>{
    await page.close();
})
test("Validate user isa able to add single product to cart", async({page})=>{
    await homepage.makeProductSearch(config.productname);
    await search.openProduct(config.productname);
    await productpage.addProducttoCart();
    expect(productpage.verifySuccessMessage()).toBeTruthy();
})

test.only("Click cart button and open minicart", async({page})=>{
     await homepage.makeProductSearch(config.productname);
    await search.openProduct(config.productname);
    await productpage.addProducttoCart();
    await productpage.openMiniCart();
    expect(await productpage.verifyMiniCartOpens()).toBeTruthy();
    await productpage.openCartPage();
    expect(await cart.isCartPageExists()).toBeTruthy();
})