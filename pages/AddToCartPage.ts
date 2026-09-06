import { Page, expect, Locator } from '@playwright/test';

export class AddToCartPage {

    readonly page: Page;

    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly addToCartButton: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {

        this.page = page;

        this.productName = page.getByRole(
            'heading',
            { name: 'Grey jacket' }
        );

        this.productPrice = page.getByRole(
            'heading',
            { name: '£55.00' }
        );

        this.addToCartButton = page.getByRole(
            'button',
            { name: /Add to Cart/i }
        );

        this.cartLink = page.getByRole(
            'link',
            { name: 'My Cart (1)' }
        );
    }


    // ==============================
    // VERIFY PRODUCT
    // ==============================

    async verifyProduct(
        productName: string
    ) {

        await expect(
            this.page.getByRole(
                'heading',
                { name: productName }
            )
        ).toBeVisible();

        console.log(
            `✅ Product page displayed: ${productName}`
        );
    }


    // ==============================
    // ADD TO CART
    // ==============================

    async addToCart() {

        await expect(
            this.addToCartButton
        ).toBeVisible();

        console.log(
            'Add to Cart button is visible'
        );

        await this.addToCartButton.click();

        console.log(
            '✅ Product added to cart successfully'
        );
    }


    // ==============================
    // VERIFY CART COUNT
    // ==============================

    async verifyCartCount() {

        const cart = this.page.getByRole(
            'link',
            { name: 'My Cart (1)' }
        );

        await expect(
            cart
        ).toBeVisible();

        console.log(
            '✅ Cart count is 1'
        );

        console.log(
            'Cart text:',
            await cart.textContent()
        );
    }
}