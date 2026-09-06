# Playwright Automation POC

## 📌 Overview

This project is a Proof of Concept (POC) for web automation testing using Playwright with TypeScript.

The project demonstrates a complete end-to-end user journey including:

- User Sign Up
- Home Page validation
- User Logout
- User Login
- Product selection
- Product validation
- Add product to cart
- Cart validation
- User Logout

The project follows the **Page Object Model (POM)** design pattern to improve code maintainability, readability, and reusability.

---

## 🎯 Objective

The objective of this POC is to demonstrate:

- Playwright test automation using TypeScript
- Page Object Model implementation
- Reusable page classes
- End-to-end test automation
- Environment-based configuration
- Secure handling of passwords using environment variables
- HTML test reporting
- Chromium-based test execution

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| Playwright | Web automation and testing |
| TypeScript | Programming language |
| Node.js | Runtime environment |
| npm | Package management |
| dotenv | Environment variable management |
| Git | Version control |
| GitHub | Source code repository |

---

## 🌐 Application Under Test

The POC currently uses:

**Application URL:**

https://sauce-demo.myshopify.com/

The URL is configured through the `.env` file using the `BASE_URL` variable.

---

# 📂 Project Structure

```text
PlaywrightPOC/
│
├── pages/
│   ├── SignUpPage.ts
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   └── AddToCartPage.ts
│
├── tests/
│   └── EndToEndTest.spec.ts
│
├── .env
├── .env.example
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json

## 🚀 Quick Start

### 1. Clone the repository

git clone https://github.com/Hsahu520/PlaywrightPOC.git
cd PlaywrightPOC

### 2. Install dependencies

npm install

### 3. Install Playwright browsers

npx playwright install

### 4. Create the environment file

cp .env.example .env

### 5. Configure the environment

Update `.env`:

BASE_URL=https://sauce-demo.myshopify.com/
TEST_EMAIL=your-test-email@example.com
TEST_PASSWORD=your-password

### 6. Verify the Base URL

node -e "require('dotenv').config(); console.log('BASE_URL:', process.env.BASE_URL)"

Expected:

BASE_URL: https://sauce-demo.myshopify.com/

### 7. Run the E2E test

npx playwright test tests/EndToEndTest.spec.ts --project=chromium

### 8. Run with browser visible

npx playwright test tests/EndToEndTest.spec.ts --project=chromium --headed

### 9. Open the HTML report

npx playwright show-report