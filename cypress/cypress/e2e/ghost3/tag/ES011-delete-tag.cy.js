import { Login } from "../login/login";
import { Menu } from "../menu/menu";
import { Site } from "../site/site";
import { Tag } from "./tag";


describe("Testing delete tag", () => {
  let _siteObject = new Site('ES011');
  let _loginObject = new Login('ES011');
  let _tagObject = new Tag('ES011');
  let menuObject = new Menu('ES011');
  let edslut = '';
  const Tag4 = "Cypress tag ghost 4";
  
  it("Test delete tag", () => {
    // GIVEN: usuario autenticado
    _siteObject.given_user_visit_ghost();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    // WHEN: usuario navega a la pantalla tag
    menuObject.when_user_navigate_to_tags();
    // AND: usuario da click en el boton new tag
    _tagObject.when_user_click_on_new_tag();
    // AND: usuario ingresa el nombre del tag
    _tagObject.when_user_name_tag(Tag4);
    // AND: usuario guarda tag
    _tagObject.when_user_save_tag ();

    
    // THEN: valida título tag
    _tagObject.then_valida_titulo_tag(Tag4);
    // WHEN: usuario toma el valor de slug del tag
    _tagObject.when_retorna_slug ().then((value) => {
      // WHEN: usuario navega a la pantalla tag
      menuObject.when_user_navigate_to_tags();
      // WHEN: usuario busca de la lista el tag creado
      _tagObject.when_click_list_tag(value, Tag4);

      // AND: usuario limpia nombre del tag
      _tagObject.when_user_delete_current_tag();
      
      // WHEN: usuario busca el elemento borrado en la lista
      _tagObject.then_list_tag(value, Tag4);

    });

  });
});