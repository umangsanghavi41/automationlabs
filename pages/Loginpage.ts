import{Page,Locator} from "@playwright/test"
export class Login{
    private readonly page:Page;
    private readonly emailTextfield:Locator;
    private readonly passwordTextfield:Locator;
    private readonly loginButton:Locator;
    private readonly myAccountHeader:Locator;
    private readonly loginErrorMessage:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.emailTextfield=page.locator("#input-email");
        this.passwordTextfield=page.locator("#input-password");
        this.loginButton=page.locator(".btn-primary").nth(1);
        this.myAccountHeader=page.locator("h2").nth(0);
        this.loginErrorMessage=page.locator(".alert");
    }
    async fillEmail(email:string)
    {
        await this.emailTextfield.fill(email);
    }
    async fillPassword(password:string)
    {
        await this.passwordTextfield.fill(password);
    }
    async clickLoginButton()
    {
        await this.loginButton.click();
    }
    async getMyAccountMsg()
    {
        return await this.myAccountHeader.innerText();
    }
    async isErrorMessageVisible()
    {
      return await this.loginErrorMessage.textContent();
    }
}