
export class Staff {

  oldFullName = "";
  newFullName = "New FullName";

  get userNameField() {
    return cy.get("#user-name");
  }

  get saveButton() {
    return cy.get(".gh-canvas-header > .view-actions > button");
  }

  constructor() {}

  when_user_click_on_first_user = () => {
    cy.get(".apps-grid-cell.tooltip-centered > a").then((buttons) => {
      buttons[0].click();
    });
  };

  when_user_type_new_fullname = () => {
    cy.wait(2000);
    cy.window().then((win) => {
      this.oldFullName = win.document.querySelector("#user-name").value;
    });
    this.userNameField.clear().type(this.newFullName, { force: true });
    cy.wait(500);
  };

  when_user_type_old_fullname = () => {
    this.userNameField.clear().type(this.oldFullName, { force: true });
    cy.wait(500);
  };

  when_user_save_settings = () => {
    this.saveButton.click();
    cy.wait(100);
  };

  then_save_settings = () => {
    cy.get(
      ".gh-canvas-header > .view-actions > button > span"
    ).then(($title) => {
      expect($title[0].innerText).to.equal("Saved");
    });

    cy.get(
      '.gh-user-name'
    ).then(($username) => {
      expect($username[0].innerText).to.equal(this.newFullName);
    });
  };
}
