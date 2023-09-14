class ProductsPage {
  getProductName() {
    return cy.get('h4[class="card-title"]');
  }
  clickOnAddButton() {
    return cy.get('.btn.btn-info');
  }
  clickOnChecOut() {
    return cy.contains('Checkout').click();
  }
}

export default ProductsPage;
