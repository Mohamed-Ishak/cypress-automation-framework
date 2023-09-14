/// <reference  types='cypress' />
import '../e2e/pages/HomePage';
import HomePage from '../e2e/pages/HomePage';
import ProductsPage from '../e2e/pages/ProductsPage';
import CartPage from '../e2e/pages/CartPage';
import PurchasePage from '../e2e/pages/PurchasePage';
describe('Test', () => {
  //create Objects
  const homePage = new HomePage();
  const productPage = new ProductsPage();
  const cartPage = new CartPage();
  const purchasePage = new PurchasePage();
  // using globalThis command || create a globale variable
  //let data;

  before(function () {
    cy.fixture('testData').then((fdata) => {
      globalThis.data = fdata;
    });
  });

  // npx cypress run --spec cypress\e2e\specPageObjectFramework.cy.js --headed --browser chrome --env url="https://rahulshettyacademy.com"
  it('First test case', () => {
    // Cypress.config('defaultCommandTimeout', 10000);
    // cy.viewport('macbook-16')
    cy.visit(Cypress.env('url') + '/angularpractice');
    homePage.enterUserName().type(globalThis.data.fname);
    homePage.enterUserName().should('have.value', globalThis.data.fname);
    homePage.enterUserName().should('have.attr', 'minlength', 2);
    homePage.selectGender().select(globalThis.data.gender);
    homePage.checkEnterprenaeure().should('be.disabled');

    homePage.clickOnShopMenuLink().click();

    //selectProduct() is a custom command
    globalThis.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
    //inside Product Page
    productPage.clickOnChecOut();

    //inside Cart Page
    cartPage.getProductPrice();
    cartPage.clickOnCheckOut();

    //inside Purchase Page
    purchasePage.enterYourLocation();

    //overide On the deafult wait
    //Cypress.config('defaultCommandTimeout', 8000);
    cy.wait(8000);
    purchasePage.selectSuggestedLocation();

    purchasePage.markCheckboxAsChecked();
    purchasePage.clickOnPurchase();
    purchasePage.validateSuccessfulMessage();
  });
});
