import { Login } from "../login/login";
import { Menu } from "../menu/menu";
import { Site } from "../site/site";
import { Page } from "../page/page";
import { Config } from "./config";

describe("Testion new menus", () => {
  let _siteObject;
  let _loginObject;
  let _pageObject;
  let menuObject;
  let _configObject;
  beforeEach(()=>{
    // GIVEN: usuario autenticado y navego hasta pages
    _siteObject = new Site("http://localhost:2368/ghost/#/signin");
    _siteObject.given_user_visit_ghost();

    _loginObject = new Login();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    menuObject = new Menu();
    menuObject.when_user_navigate_to_pages();

    _pageObject = new Page();
    _pageObject.when_user_click_on_new_page();
    _pageObject.when_user_type_title_and_content();
    _pageObject.when_user_publish_page();
  });

  it("Create new page menu en la navegacion secundaria", () => {
    menuObject = new Menu();
    _pageObject = new Page();
    _configObject = new Config();
      
    // WHEN: usuario obtiene el link de la pagina
    let url =_pageObject.when_user_get_page_link();
    
    menuObject.when_user_navigate_to_config();
    _configObject.when_user_create_new_menu_onsecondary_navigation();
    //menuObject.when_user_navigate_to_view_site();
    _configObject.then_the_menu_was_created();
  });

});
