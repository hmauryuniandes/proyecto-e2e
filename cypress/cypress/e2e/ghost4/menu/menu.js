export class Menu {

  get postLink() {
    return cy.get('li > a[href="#/posts/"]');
  } 

  get generalLink() {
    return cy.get('li > a[href="#/settings/general/"]');
  }

  get codeInjectionLink() {
    return cy.get('li > a[href="#/settings/code-injection/"]');
  }

  get staffLink() {
    return cy.get('li > a[href="#/staff/"]');
  }

  get siteLink() {
    return cy.get('a[href="#/site/"]');
  }

  get profileDropdown() {
    return cy.get('.gh-nav-bottom > div.pointer');
  } 

  get logoutButton() {
    return cy.get('a[href="#/signout/"]');
  } 

  get profileButton() {
    return cy.get('.dropdown-menu.dropdown-triangle-top > li:nth-of-type(4) > a');
  } 

  get tagLink() {
    return cy.get('li > a[href="#/tags/"]');
  } 

  get pageLink() {
    return cy.get('li > a[href="#/pages/"]');
  }

  constructor() {}

  when_user_navigate_to_posts = () => {
    this.postLink.click();
  };

  when_user_expand_profile = () => {
    this.profileDropdown.click();
  };

  when_user_logout = () => {
    this.logoutButton.click();
  };

  when_user_click_profile = () => {
    this.profileButton.click();
  };

  when_user_navigate_to_general = () => {
    this.generalLink.click();
  };

  when_user_navigate_to_code_injection = () => {
    this.codeInjectionLink.click();
  };

  when_user_navigate_to_site = () => {
    this.siteLink.click();
  };

  when_user_navigate_to_staff = () => {
    this.staffLink.click();
  };

  when_user_navigate_to_tags = () => {
    this.tagLink.click();
  };

  when_user_navigate_to_pages = () => {
    this.pageLink.click();
  };

  when_user_navigate_to_pages = () => {
    cy.get("section.gh-nav-body").within(() => {
      cy.get('a[href="#/pages/"]').click();
    });
  };

  when_user_navigate_to_config = () => {
    cy.get("section.gh-nav-body").within(() => {
      cy.get('a[href="#/settings/design/"]').click();
    });
  }

  when_user_navigate_to_view_site = () => {
    cy.get("section.gh-nav-body").within(() => {
      cy.get('a[href="#/site/"]').click();
    });
  };
}


