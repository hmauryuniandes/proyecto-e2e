import { Login } from "../page-object/login/login";
import { Site } from "../page-object/site/site";
import { Menu } from "../page-object/menu/menu";
import { Staff } from "../page-object/staff/staff";

describe('Testing General settings', () => {
  let _siteObject = new Site('ES017');
  let _loginObject = new Login('ES017');
  let _staffObject = new Staff('ES017');
  let _menuObject = new Menu('ES017');

  beforeEach(() => {
    _siteObject;
    _loginObject;
    _staffObject;
    _menuObject;

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
  })

  afterEach(() => {
    _staffObject.when_user_type_old_twitter();
    _staffObject.when_user_save_settings();
  })

  it("Test twitter a priori mockaroo", () => {
    // GIVEN: usuario autenticado
    _siteObject.given_user_visit_ghost();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    // WHEN: usuario click en el profile dropdown
    _menuObject.when_user_expand_profile();
    // AND: click en el profile
    _menuObject.when_user_click_profile();
    // AND: usuario borra e ingresa el nuevo nombre
    _staffObject.when_user_type_new_twitter();
    // AND: usuario guarda las configuraciones
    _staffObject.when_user_save_settings();

    // THEN: el cambio fue guardado
    _staffObject.then_save_settings();
  });
});