class PurchasePage {
  enterYourLocation() {
    return cy.get('#country').type('India');
  }

  selectSuggestedLocation() {
    //.suggestions > ul > li > a
    //.row .suggestions
    return cy.get('.row .suggestions').click();
  }

  clickOnPurchase() {
    return cy.get('input[type="submit"]').click();
  }

  markCheckboxAsChecked() {
    return cy.get('#checkbox2').click({ force: true });
  }

  validateSuccessfulMessage() {
    // Thank you! Your order will be delivered in next few weeks :-).

    cy.get('.row .alert').then((successMessage) => {
      const expectedMSG = successMessage.text();
      console.log(expectedMSG);
      expect(expectedMSG.includes('Success')).to.be.true;
    });
  }
}
export default PurchasePage;
