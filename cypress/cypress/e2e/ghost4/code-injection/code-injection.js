export class CodeInjection {
  constructor() { }

  when_user_type_header_and_footer = () => {
    /*cy.get('.CodeMirror-code > div > .CodeMirror-line > span').then(divs => {
      cy.wrap(divs[0]).type('hola',{force: true});
    });*/
    cy.get('.CodeMirror-code > div > .CodeMirror-line > span').invoke('text')
    .then(text => {
      const newText = '<style>.site-title {color: #EE2626;}</style>'; // Modificar el texto
      cy.wrap(newText)
        .should('not.equal', text) // Verificar que el texto ha cambiado
        .then(newText => {
          cy.get('.CodeMirror-code > div > .CodeMirror-line > span')
            .invoke('text', newText); // Establecer el nuevo texto
        });
    });
    cy.wait(100);
};

when_user_save_settings = () => {
  cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
  cy.wait(2000);
};


then_save_settings = () => {
  cy.get('.view-actions > .gh-btn.gh-btn-blue.gh-btn-icon.ember-view > span').then(($title) => {
    expect($title[0].innerText).to.equal("Saved");
  });
};
    
  }