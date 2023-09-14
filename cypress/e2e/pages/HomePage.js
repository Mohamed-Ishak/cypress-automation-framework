class HomePage {
  enterUserName() {
    return cy.get('form input[name="name"]');
  }
  selectGender() {
    return cy.get('select');
  }
  checkEnterprenaeure() {
    return cy.get('#inlineRadio3');
  }
  clickOnShopMenuLink() {
    return cy.get('.nav-item:nth-child(2)');
  }
}

export default HomePage;
