const dataEmail = require("../data/email.json");
const dataPassword = require("../data/password.json");
const dataEmailCorrecto = require("../data/email_correcto.json");
const dataPasswordCorrecto = require("../data/password_correcto.json");
const retryText = "Retry";

export class Login {

  get username() {
    return cy.get('input[name="identification"]');
  }
  get password() {
    return cy.get('input[name="password"]');
  }
  get loginButton() {
    return cy.get("button.login");
  }

  scenario = ''

  constructor(scenario = '') {
    this.scenario = scenario;
    this.index = 0;
  }

  getIndexRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  when_user_enter_credentials_and_click_on_login = () => {
    this.username.clear().type(dataEmailCorrecto[0].email);
    this.password.clear().type(dataPasswordCorrecto[0].password);
    this.loginButton.click();
    cy.wait(2000);
    cy.screenshot(`${this.scenario}/enter_credentials`);
  };

  when_user_enter_invalid_credentials_and_click_on_login = () => {
    let index = this.getIndexRandom(1, 1000);
    this.username.type(dataEmail[index].email);
    this.password.type(dataPassword[index].password);
    this.loginButton.click();
    cy.wait(1000);
    cy.screenshot(`${this.scenario}/click_on_login`);
  };

  then_show_invalid_message_and_show_retry = () => {
    cy.get("button.login > span").then(($span) => {
      expect($span[0].innerText).to.equal(retryText);
    });

    cy.get("p.main-error").then(($error) => {
      expect($error).to.not.be.undefined;
    });
    cy.screenshot(`${this.scenario}/show_invalid_login`);
  };

}
