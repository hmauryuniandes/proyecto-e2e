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
    _siteObject = new Site("ES118");
    _siteObject.given_user_visit_ghost();

    _loginObject = new Login("ES118");
    _loginObject.when_user_enter_credentials_and_click_on_login();

    menuObject = new Menu("ES118");
    menuObject.when_user_navigate_to_pages();
  });


  it("Test edit page", ()=>{
     // WHEN: usuario da click en editar pagina
     _pageObject = new Page("ES118");
     _pageObject.when_edit_the_publication_time_of_a_page_random();
     //THEN: la pagina fue modificada
     _pageObject.then_page_was_saved();
    
  })


});