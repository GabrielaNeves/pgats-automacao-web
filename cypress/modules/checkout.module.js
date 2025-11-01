export function confirmarPedido() {
  cy.url().should('include', '/view_cart');
  cy.contains('Proceed To Checkout').click();
  cy.get('.checkout-information').should('be.visible');
  cy.get('#cart_info').should('be.visible');
  cy.get('textarea[name="message"]').type('Pedido de teste automatizado.');
  cy.contains('Place Order').click();
}

export function realizarPagamento(f) {
  const payment = f.payment;

  cy.get('input[name="name_on_card"]').type(payment.name_on_card);
  cy.get('input[name="card_number"]').type(payment.card_number);
  cy.get('input[name="cvc"]').type(payment.cvc);
  cy.get('input[name="expiry_month"]').type(payment.expiry_month);
  cy.get('input[name="expiry_year"]').type(payment.expiry_year);
  cy.contains('Pay and Confirm Order').click();
}