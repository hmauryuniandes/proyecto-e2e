import { Login } from "../login/login";
import { Site } from "../site/site";
import { Menu } from "../menu/menu";
import { CodeInjection, CodeInyection } from "./code-injection";

describe('Testing General settings', () => {
  let _siteObject = new Site('ES017');
  let _loginObject = new Login('ES017');
  let _generalObject = new CodeInjection('ES017');
  let _menuObject = new Menu('ES017');

  it("Test Title & description", () => {
    // GIVEN: usuario autenticado
    _siteObject.given_user_visit_ghost();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    // WHEN: usuario navega a la pantalla setting/General
    _menuObject.when_user_navigate_to_code_injection();
    // AND: usuario da click en el boton expand del titulo y la descripción
    // AND: usuario ingresa el titulo y descripcion del blog
    _generalObject.when_user_type_header_and_footer();
    // AND: usuario guarda las configuraciones
    _generalObject.when_user_save_settings();

    // THEN: el cambio fue guardado
    _generalObject.then_save_settings();
    _menuObject.when_user_navigate_to_site();
  });
});