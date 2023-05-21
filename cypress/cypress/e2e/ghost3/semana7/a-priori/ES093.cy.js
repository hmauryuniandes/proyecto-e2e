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
    _siteObject = new Site("ES093");
    _siteObject.given_user_visit_ghost();

    _loginObject = new Login("ES093");
    _loginObject.when_user_enter_credentials_and_click_on_login();

    menuObject = new Menu("ES093");
    menuObject.when_user_navigate_to_pages();
  });


  it("Test edit page", ()=>{
     // WHEN: usuario da click en editar pagina
     _pageObject = new Page("ES093");
     _pageObject.when_user_click_on_edit_page_a_priory();
     //THEN: la pagina fue modificada
     _pageObject.then_page_was_modified();
    
  })


});