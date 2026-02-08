import { Page,Locator } from "@playwright/test";
import { Randomdatagen } from "../utils/Randomdatagen";
export class Registration{
    private readonly firstNameField:Locator;
    private readonly lastNameField:Locator;
    private readonly emailField:Locator;
    private readonly phoneNumber:Locator;
    private readonly password:Locator;
    private readonly confirmPassword:Locator;
    private readonly privacyPolicyCheckbox:Locator;
    private readonly continueButton:Locator;
    private readonly page:Page;
    private readonly successMessage:Locator;
    
    constructor(page:Page)
    {
        this.page=page;
        this.firstNameField=page.locator("#input-firstname");
        this.lastNameField=page.locator("#input-lastname");
        this.emailField=page.locator("#input-email");
        this.phoneNumber=page.locator("#input-telephone");
        this.password=page.locator("#input-password");
        this.confirmPassword=page.locator("#input-confirm");
        this.privacyPolicyCheckbox=page.locator("input[type='checkbox']");
        this.continueButton=page.locator(".btn-primary");
        this.successMessage=page.locator("h1");
    }

    async fillFirstName()
    {
        const firstName:string=Randomdatagen.getFirstName();
        await this.firstNameField.fill(firstName);
    }
    async fillLastName()
    {
        const lastName:string=Randomdatagen.getLastName();
        await this.lastNameField.fill(lastName);
    }
    async fillEmail()
    {
        const email:string=Randomdatagen.email();
        await this.emailField.fill(email);
    }
    async fillPhoneNumber()
    {
        const phonenumber:string=Randomdatagen.phoneNumber();
        await this.phoneNumber.fill(phonenumber);
    }
    async fillPassword()
    {
        const password:string=Randomdatagen.password();
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
    }
    async fillConfirmPassword(confirmPassword:string)
    {
        const password:string=Randomdatagen.password();
        await this.confirmPassword.fill(confirmPassword);
    }
    async clickPrivacyPolicy()
    {
        await this.privacyPolicyCheckbox.click();
    }
    async clickContinueButton()
    {
        await this.continueButton.click();
    }
    async verifySuccess()
    {
        return await this.successMessage.textContent();

    }
}