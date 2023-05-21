import { Login } from "../page-object/login/login";
import { Menu } from "../page-object/menu/menu";
import { Site } from "../page-object/site/site";
import { Page } from "../page-object/page/page";


describe("Testing page creation", () => {
  let _siteObject;
  let _loginObject;
  let _pageObject;
  let menuObject;
  beforeEach(()=>{
    // GIVEN: usuario autenticado y navego hasta pages
    _siteObject = new Site("ES104");
    _siteObject.given_user_visit_ghost();

    _loginObject = new Login("ES104");
    _loginObject.when_user_enter_credentials_and_click_on_login();

    menuObject = new Menu("ES104 ");
    menuObject.when_user_navigate_to_pages();
  });
  

  it("Test create new page", () => {
    // WHEN: usuario da click en el boton new page
    _pageObject = new Page("ES104");
    _pageObject.when_user_click_on_new_page();
    // AND: usuario ingresa el titulo de la pagina
    _pageObject.when_user_type_title_random();
    // AND: click fuera del recuadro
    _pageObject.when_user_click_on_content();
    // AND: usuario publica el pagina
    _pageObject.when_user_publish_page();

    
    // THEN: la pagina fue publicado
    _pageObject.then_page_was_published();
    
  });

});