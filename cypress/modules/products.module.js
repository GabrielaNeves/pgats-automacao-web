export function validaDetalhesDoProduto() {
  cy.get('.single-products').should('have.length.greaterThan', 0);
  cy.get('a[href="/product_details/1"]').click();
  cy.get('h2').should('be.visible');
  cy.get('p:contains("Category")').should('be.visible');
  cy.get('span:contains("Rs.")').should('be.visible');
  cy.get('p:contains("Availability")').should('be.visible');
  cy.get('p:contains("Condition")').should('be.visible');
  cy.get('p:contains("Brand")').should('be.visible');
}

export function procurarProduto(f) {
  cy.get('input[id="search_product"]').type(f.search.term);
  cy.get('button[id="submit_search"]').click();
  cy.contains('Searched Products').should('be.visible');
  cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);
}

export function adicionarProdutoNoCarrinhoPorIndex(index) {
  cy.get('a[data-product-id]').eq(index).click();
  cy.get('p > a[href="/view_cart"]').click();
}