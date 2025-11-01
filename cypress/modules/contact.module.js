export function realizarContato(f) {
  const c = f.contact;
  cy.get('input[data-qa="name"]').type(c.name);
  cy.get('input[data-qa="email"]').type(c.email);
  cy.get('input[data-qa="subject"]').type(c.subject);
  cy.get('textarea[data-qa="message"]').type(c.message);
  cy.get('input[name="upload_file"]').selectFile(`cypress/fixtures/${c.upload}`);
  cy.get('input[data-qa=submit-button]').click();
  cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
  cy.get('a[class="btn btn-success"]').click();
  cy.get('img[alt="Website for automation practice"]').should('be.visible');
}