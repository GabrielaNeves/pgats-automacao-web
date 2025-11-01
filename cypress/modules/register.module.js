export function registraEmailExistente(f) {
  const u = f.users.existing;
  cy.get('[data-qa="signup-name"]').type(u.name);
  cy.get('[data-qa="signup-email"]').type(u.email);
  cy.contains('button', 'Signup').click();
  cy.contains('Email Address already exist!').should('be.visible');
}

export function registraUsuario(f) {
  const timestamp = Date.now();
  const user = Object.assign({}, f.users.valid, {
    email: f.users.valid.emailTemplate.replace('{{timestamp}}', timestamp),
    name: f.users.valid.name
  });

  cy.get('[data-qa="signup-name"]').type(user.name);
  cy.get('[data-qa="signup-email"]').type(user.email);
  cy.contains('button', 'Signup').click();
  cy.contains('Enter Account Information').should('be.visible');

  cy.get('#id_gender1').check();
  cy.get('[data-qa="password"]').type(user.password, { log: false });
  cy.get('select[data-qa=days]').select('20');
  cy.get('select[data-qa=months]').select('September');
  cy.get('select[data-qa=years]').select('1992');

  cy.get('input[type=checkbox]#newsletter').check();
  cy.get('input[type=checkbox]#optin').check();

  cy.get('input#first_name').type(user.first_name);
  cy.get('input#last_name').type(user.last_name);
  cy.get('input#company').type(user.company);
  cy.get('input#address1').type(user.address1);
  cy.get('input#address2').type(user.address2);
  cy.get('select#country').select(user.country);
  cy.get('input#state').type(user.state);
  cy.get('input#city').type(user.city);
  cy.get('[data-qa="zipcode"]').type(user.zipcode);
  cy.get('input#mobile_number').type(user.mobile_number);

  cy.get('[data-qa="create-account"]').click();
  cy.url().should('include', 'account_created');
  cy.get('h2[data-qa="account-created"]').should('have.text', 'Account Created!');
  cy.get('[data-qa="continue-button"]').click();

  cy.contains(`Logged in as ${user.name}`).should('be.visible');
}