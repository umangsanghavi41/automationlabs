import{test,expect} from "@playwright/test"
import { Homepage } from "../pages/Homepage"
import { TestConfig } from "../test.config"
import { Search } from "../pages/Searchpage"
import { Productpage } from "../pages/Productpage"

let homepage:Homepage;
let config:TestConfig;
let search:Search;
let product:Productpage;
test.beforeEach(async({page})=>{
    homepage=new Homepage(page);
    config=new TestConfig();
    search=new Search(page);
    product=new Productpage(page);
    await page.goto(config.url);
})
test.afterEach(async({page})=>{
    await page.close();
})
/* test("Verify user is able to make product search", async({})=>{
    await homepage.makeProductSearch(config.productname);
    expect(search.verifySearchPage).toBeTruthy();
}) */
test.only("Verify user is able to click matching product", async()=>{
    await homepage.makeProductSearch(config.productname);
    await search.openProduct(config.productname);
    expect(product.productPageExists()).toBeTruthy();
})