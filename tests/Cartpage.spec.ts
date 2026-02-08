import{test,expect} from "@playwright/test"
import { Homepage } from "../pages/Homepage"
import { Search } from "../pages/Searchpage"
import { Productpage } from "../pages/Productpage"
import { Cart } from "../pages/Cartpage"
import { TestConfig } from "../test.config"

let homepage:Homepage;
let search:Search;
let product:Productpage;
let cart:Cart;
let config:TestConfig;

test.beforeEach(async({page})=>{
    homepage=new Homepage(page);
    search=new Search(page);
    product=new Productpage(page);
    cart=new Cart(page);
    config=new TestConfig();
    await page.goto(config.url);
    await homepage.makeProductSearch(config.productname);
    await search.openProduct(config.productname);
    await product.addProducttoCart();   
})

test("Verify total is same on mini cart & cart", async()=>{
    await product.openMiniCart();
    const total=await product.getTotal();
    await product.openCartPage();
    const cartTotal=await cart.getCartTotal();
    expect(total).toEqual(cartTotal);
})

