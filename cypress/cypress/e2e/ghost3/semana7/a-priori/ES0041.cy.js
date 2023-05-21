import { Login } from "../page-object/login/login";
import { Site } from "../page-object/site/site";
import { Menu } from "../page-object/menu/menu";
import { Tag } from "../page-object/tag/tag";

const datatitle = require("./data/title_and_description.json");
const dataanytext = require("./data/any_text.json");

describe("Crear tag con color lista", () => {
  let _siteObject = new Site('ES041');
  let _loginObject = new Login('ES041');
  let _tagObject = new Tag();
  let menuObject = new Menu('ES041');

  let index = _tagObject.getIndexRandom(1, 1000);
  const Tag1 = datatitle[index].title;
  const desc = dataanytext[index].cualquier_texto;

  it("Test Crear tag con color lista", () => {
    // GIVEN: usuario autenticado
    _siteObject.given_user_visit_ghost();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    // WHEN: usuario navega a la pantalla tag
    menuObject.when_user_navigate_to_tags();
    // AND: usuario da click en el boton new tag
    _tagObject.when_user_click_on_new_tag();
    // AND: usuario ingresa el nombre del tag
    _tagObject.when_user_name_tag(Tag1);
    // AND: usuario ingresa el descripción del tag
    _tagObject.when_user_description_tag(desc);
    // AND: usuario guarda tag
    _tagObject.when_user_save_tag ();
    // THEN: valida título tag
    _tagObject.then_valida_titulo_tag(Tag1);

     // WHEN: usuario toma el valor de slug del tag
     _tagObject.when_retorna_slug ().then((value) => {
      // WHEN: usuario navega a la pantalla tag
      menuObject.when_user_navigate_to_tags();
      // WHEN: usuario busca de la lista el tag creado
      _tagObject.when_click_list_tag(value, Tag1);

      // AND: usuario limpia nombre del tag
      _tagObject.when_user_delete_current_tag();
      // WHEN: usuario busca el elemento borrado en la lista
      _tagObject.then_list_tag(value, Tag1);
    });

  });
    
});