import { Page, expect, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;

    readonly homeLink: Locator;
    readonly catalogLink: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {

        this.page = page;

        this.homeLink = page.getByRole(
            'link',
            { name: 'Home' }
        ).first();

        this.catalogLink = page.getByRole(
            'link',
            { name: 'Catalog' }
        );

        // IMPORTANT:
        // Select the My Cart link which has href="/cart"
        // this.cartLink = page.locator(
        //     '#minicart a.cart.mobile[href="/cart"]'
        // );
        this.cartLink = page.locator(
            'a').filter(
            { hasText: 'My Cart' }
        ).first();
    }


    // ==============================
    // GO TO HOME
    // ==============================

    async goToHome() {

        await this.homeLink.click();

        await expect(this.page).toHaveURL(
            /sauce-demo\.myshopify\.com\/?$/
        );

        console.log(
            '✅ Home page opened successfully'
        );
    }


    // ==============================
    // VERIFY HOME PAGE
    // ==============================

    async verifyHomePage() {

        await expect(
            this.homeLink
        ).toBeVisible();

        await expect(
            this.catalogLink
        ).toBeVisible();

        await expect(
            this.cartLink
        ).toBeVisible();

        console.log(
            '✅ Home button is visible'
        );

        console.log(
            '✅ Catalog button is visible'
        );

        console.log(
            '✅ Cart button is visible'
        );

        console.log(
            '✅ Home page verified successfully'
        );
    }


    // ==============================
    // SELECT PRODUCT
    // ==============================

    async selectProduct(
        productName: string
    ) {

        const product = this.page.getByRole(
            'link',
            { name: productName }
        );

        await expect(
            product
        ).toBeVisible();

        await product.click();

        console.log(
            `✅ Product selected successfully: ${productName}`
        );
    }


    // ==============================
    // OPEN CART
    // ==============================

    async openCart() {

        await expect(
            this.cartLink
        ).toBeVisible();

        console.log(
            '✅ Cart link is visible'
        );

        await this.cartLink.click();

        await expect(this.page).toHaveURL(
        /\/collections\/frontpage\/products\/grey-jacket#$/
        );

        console.log(
            '✅ Cart opened successfully'
        );
    }
}