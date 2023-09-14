import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';
import PurchasePage from '../../pages/PurchasePage';
const homePage = new HomePage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const purchasePage = new PurchasePage();

//I open Ecommarce page
Given('I open Ecommarce page', () => {
  cy.visit(Cypress.env('url') + '/angularpractice');
});

//I add Items to cart
When('I add Items to cart', () => {
  homePage.clickOnShopMenuLink().click();

  globalThis.data.productName.forEach((element) => {
    cy.selectProduct(element);
  });

  productsPage.clickOnChecOut();
});

//Validate the Total prices
Then('Validate the Total prices', () => {
  cartPage.getProductPrice();
  cartPage.clickOnCheckOut();
});

//Select the country submit and verfiy success message
Then('Select the country submit and verfiy success message', () => {
  purchasePage.enterYourLocation();
  cy.wait(8000);
  purchasePage.selectSuggestedLocation();

  purchasePage.markCheckboxAsChecked();
  purchasePage.clickOnPurchase();
  purchasePage.validateSuccessfulMessage();
});

//Fill the Form Details
When('Fill the Form Details', () => {
  homePage.enterUserName().type(globalThis.data.fname);
  homePage.selectGender().select(globalThis.data.gender);
});

//Vlidate the form behaviour
Then('Vlidate the form behaviour', () => {
  homePage.enterUserName().should('have.value', globalThis.data.fname);
  homePage.enterUserName().should('have.attr', 'minlength', 2);
  homePage.checkEnterprenaeure().should('be.disabled');
});

//Click on the Shop tab
Then('Click on the Shop tab', () => {
  homePage.clickOnShopMenuLink().click();
});
