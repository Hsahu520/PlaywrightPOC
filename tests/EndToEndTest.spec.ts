import { test } from '@playwright/test';

import { SignUpPage } from '../pages/SignUpPage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { AddToCartPage } from '../pages/AddToCartPage';


test(
    'E2E - Sign Up, Home, Logout, Login, Product and Cart',
    async ({ page }) => {


        // ==========================================
        // CREATE PAGE OBJECTS
        // ==========================================

        const signUpPage = new SignUpPage(page);

        const loginPage = new LoginPage(page);

        const homePage = new HomePage(page);

        const addToCartPage =
            new AddToCartPage(page);


        // ==========================================
        // TEST DATA
        // ==========================================

        let serialNumber = 300;

        const firstName = 'Ram';

        const lastName = 'Charan';

        const email =
            `ramcharan${serialNumber}@gmail.com`;

        const password = 'Test@12345';


        // ==========================================
        // OPEN WEBSITE
        // ==========================================

        await page.goto(
            'https://sauce-demo.myshopify.com/'
        );


        // ==========================================
        // 1. SIGN UP
        // ==========================================

        await signUpPage.signUp(
            firstName,
            lastName,
            email,
            password
        );


        // ==========================================
        // 2. VERIFY HOME PAGE
        // ==========================================

        await homePage.verifyHomePage();


        // ==========================================
        // 3. LOGOUT
        // ==========================================

        await loginPage.logout();


        // ==========================================
        // 4. LOGIN
        // ==========================================

        await loginPage.login(
            email,
            password
        );


        // ==========================================
        // 5. GO TO HOME
        // ==========================================

        await homePage.goToHome();


        // ==========================================
        // 6. VERIFY HOME PAGE
        // ==========================================

        await homePage.verifyHomePage();


        // ==========================================
        // 7. SELECT PRODUCT
        // ==========================================

        await homePage.selectProduct(
            'Grey jacket'
        );


        // ==========================================
        // 8. VERIFY PRODUCT
        // ==========================================

        await addToCartPage.verifyProduct(
            'Grey jacket'
        );


        // ==========================================
        // 9. ADD TO CART
        // ==========================================

        await addToCartPage.addToCart();


        // ==========================================
        // 10. VERIFY CART
        // ==========================================

        await addToCartPage.verifyCartCount();


        // ==========================================
        // 11. OPEN CART
        // ==========================================

        await homePage.openCart();


        // ==========================================
        // 12. LOGOUT
        // ==========================================

        await loginPage.logout();


        console.log(
            '✅ E2E test completed successfully'
        );
    }
);