import { Page, expect, Locator } from '@playwright/test';

export class SignUpPage {

    readonly page: Page;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly createButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstName = page.locator(
            '[name="customer[first_name]"]'
        );

        this.lastName = page.locator(
            '[name="customer[last_name]"]'
        );

        this.email = page.locator(
            '[name="customer[email]"]'
        );

        this.password = page.locator(
            'input[type="password"]'
        );

        this.createButton = page.locator(
            'input[type="submit"][value="Create"]'
        );
    }

    async signUp(
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ) {

        await this.page.getByRole(
            'link',
            { name: 'Sign up' }
        ).click();

        await expect(
            this.page.getByRole(
                'heading',
                { name: 'Create Account' }
            )
        ).toBeVisible();

        console.log('Sign Up page displayed successfully ✅');

        await this.firstName.fill(firstName);

        await this.lastName.fill(lastName);

        await this.email.fill(email);

        await this.password.fill(password);

        await expect(
            this.createButton
        ).toBeVisible();

        console.log('Creating account...');

        await this.createButton.click();

        console.log('✅ Signed up successfully');
    }
}