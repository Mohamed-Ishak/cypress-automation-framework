before(function () {
  cy.fixture('testData').then((fdata) => {
    globalThis.data = fdata;
  });
});
