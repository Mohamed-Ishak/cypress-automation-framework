class CartPage {
  clickOnCheckOut() {
    return cy.contains('Checkout').click();
  }

  getProductPrice() {
    let sum = 0;
    cy.get('tr td:nth-child(4) strong')
      .each((element) => {
        const amount = element.text();
        var price = amount.split(' ');
        price = price[1].trim();
        sum += parseInt(price);
      })
      .then(() => cy.log(sum));
    cy.get('h3 strong').then((element) => {
      const total = element.text();
      var price = total.split(' ');
      price = price[1].trim();
      const totalPrice = parseInt(price);
      expect(totalPrice).to.equal(sum);
    });
  }
}

export default CartPage;
