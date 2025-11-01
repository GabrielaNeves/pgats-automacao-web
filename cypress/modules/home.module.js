export function acessarLoginESignup() {
  cy.get('img[alt="Website for automation practice"]').should("be.visible");
  cy.get('a[href="/login"]').click();
  cy.contains("Login to your account").should("be.visible");
  cy.contains("New User Signup!").should("be.visible");
}

export function realizarlogout() {
  cy.get('a[href="/logout"]').click();
  cy.url().should("include", "/login");
}

export function deletaUsuario() {
  cy.get('a[href="/delete_account"]').click();
  cy.contains("b", "Account Deleted!").should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
}

export function acessarContato() {
  cy.get('img[alt="Website for automation practice"]').should("be.visible");
  cy.get('a[href="/contact_us"]').click();
  cy.contains("Get In Touch").should("be.visible");
}

export function acessarProdutos() {
  cy.get('img[alt="Website for automation practice"]').should("be.visible");
  cy.get('a[href="/products"]').click();
  cy.contains("All Products").should("be.visible");
}

export function subscricao() {
  const email = `teste-${Date.now()}@test.com`;
  cy.get('img[alt="Website for automation practice"]').should("be.visible");
  cy.get('input[id="susbscribe_email"]').type(email);
  cy.get('button[id="subscribe"]').click();
  cy.get("#success-subscribe")
    .should("be.visible")
    .and("contain.text", "You have been successfully subscribed!");
}
