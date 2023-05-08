const username = "hmaury1@gmail.com";
const invalidUsername = "xxx@xxx.com";
const password = "Hola123456*#";
const invalidPassword = "123";
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

  constructor() {
   
  }

  when_user_enter_credentials_and_click_on_login = () => {
    this.username.clear().type(username);
    this.password.clear().type(password);
    this.loginButton.click();
    cy.wait(5000);
  };

  when_user_enter_invalid_credentials_and_click_on_login = () => {
    this.username.type(invalidUsername);
    this.password.type(invalidPassword);
    this.loginButton.click();
    cy.wait(1000);
  };

  then_show_invalid_message_and_show_retry = () => {
    cy.get("button.login > span").then(($span) => {
      expect($span[0].innerText).to.equal(retryText);
    });

    cy.get("p.main-error").then(($error) => {
      expect($error).to.not.be.undefined;
    });
  };
}
