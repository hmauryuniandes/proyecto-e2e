import { Login } from "../page-object/login/login";
import { Menu } from "../page-object/menu/menu";
import { Site } from "../page-object/site/site";
import { Post } from "../page-object/post/post";


describe("Testing post creation", () => {
  let _siteObject = new Site('ES086');
  let _loginObject = new Login('ES086');
  let _postObject = new Post('ES086');
  let menuObject = new Menu('ES086');

  afterEach(() => {
    _postObject.when_user_delete_current_post();
  });

  it("Test create new post", () => {
    // GIVEN: usuario autenticado
    _siteObject.given_user_visit_ghost();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    // WHEN: usuario navega a la pantalla posts
    menuObject.when_user_navigate_to_posts();
    // AND: usuario da click en el boton new post
    _postObject.when_user_click_on_new_post();
    // AND: usuario ingresa el titulo y contenido del post
    _postObject.when_user_type_title_and_content_aleatorio();
    // AND: usuario agrega una imagen
    _postObject.when_user_add_image();
    // AND: usuario agrega texto alternativo a la imagen
    _postObject.when_user_add_alt_text_to_image_aleatorio();
    // AND: usuario publica el post
    _postObject.when_user_publish_post();

    // THEN: el post fue publicado
    _postObject.then_post_was_published();
  });
});
