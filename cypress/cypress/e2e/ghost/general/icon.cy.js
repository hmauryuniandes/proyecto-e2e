import { Login } from "../login/login";
import { Site } from "../site/site";
import { Menu } from "../menu/menu";
import { General } from "./general";

describe('template spec', () => {
  let _siteObject = new Site('ES015');
  let _loginObject = new Login('ES015');
  let _generalObject = new General('ES015');
  let _menuObject = new Menu('ES015');

  it("Test Title & description", () => {
    // GIVEN: usuario autenticado
    _siteObject.given_user_visit_ghost();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    // WHEN: usuario navega a la pantalla setting/General
    _menuObject.when_user_navigate_to_general();
    // AND: usuario da click en el boton subir imagen
    _generalObject.when_user_click_on_upload_image();
    // AND: usuario guarda las configuraciones
    _generalObject.when_user_save_settings();

    // THEN: el icono fue publicado
    _generalObject.then_icon_was_updated();
  });
})