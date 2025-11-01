export function realizaLogin(f) {
  const u = f.users.existing;
  cy.get('[data-qa="login-email"]').type(u.email);
  cy.get('[data-qa="login-password"]').type(u.password, { log: false });
  cy.contains("button", "Login").click();
  cy.contains(`Logged in as ${u.name}`).should("be.visible");
}

export function loginExistente(f) {
  const u = f.users.existing;
  cy.get('[data-qa="login-email"]').type(u.email);
  cy.get('[data-qa="login-password"]').type(u.password, { log: false });
  cy.contains('button', 'Login').click();
  cy.contains(`Logged in as ${u.name}`).should('be.visible');
}

export function loginInvalido(f) {
  const bad = f.users.invalidEmail;
  cy.get('[data-qa="login-email"]').type(bad.email);
  cy.get('[data-qa="login-password"]').type(bad.password, { log: false });
  cy.contains('button', 'Login').click();
  cy.contains('Your email or password is incorrect!').should('be.visible');
}