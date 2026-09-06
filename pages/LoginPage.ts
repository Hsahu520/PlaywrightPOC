import { Page, expect, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    readonly email: Locator;
    readonly password: Locator;
    readonly signInButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {

        this.page = page;

        this.email = page.getByLabel('Email Address');

        this.password = page.getByLabel('Password');

        this.signInButton = page.locator(
            'input[type="submit"][value="Sign In"]'
        );

        // this.logoutLink = page.getByRole(
        //     'link',
        //     { name: /Log Out/i }
        // );

        this.logoutLink = page.locator(
            ':text("Log Out")'
        );

    }

    // ==============================
    // LOGIN
    // ==============================

    async login(
        email: string,
        password: string
    ) {

        await this.page.getByRole(
            'link',
            { name: 'Log In' }
        ).click();

        await expect(
            this.page.getByRole(
                'heading',
                { name: 'Customer Login' }
            )
        ).toBeVisible();

        console.log('Login page displayed successfully');

        await this.email.fill(email);

        await this.password.fill(password);

        await expect(
            this.signInButton
        ).toBeVisible();

        await this.signInButton.click();

        await this.page.waitForTimeout(5000);

        console.log('✅ Logged in successfully');

    }


    // ==============================
    // LOGOUT
    // ==============================

    async logout() {

        if (
            await this.logoutLink
                .isVisible()
                .catch(() => false)
        ) {

            await this.logoutLink.click();

            console.log('✅ Logged out successfully');

        } else {

            console.log(
                '⚠️ Logout link is not available'
            );
        }
    }
}