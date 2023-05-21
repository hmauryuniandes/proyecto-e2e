Feature: Pruebas ghost

@user1 @web
Scenario: ES060 Asignar tag a una pagina
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 16 seconds
  And I click tag
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  When I enter name tag "$name_1"
  And I wait for 2 seconds
  And I click save
  And I wait for 5 seconds
  Then I validate title tag "$$name_1"
  When I wait for 2 seconds
  And I get text value slug
  And I wait for 2 seconds
  And I click page
  And I wait for 2 seconds
  And I click new page
  And I wait for 2 seconds
  And I enter name page "$string_1"
  And I wait for 2 seconds
  And I enter content page "$string_2"
  And I wait for 2 seconds
  And I click page
  And I wait for 2 seconds
  Then I search page "$$string_1"
  And I wait for 2 seconds
  When I click settings page
  And I wait for 2 seconds
  And I assing tag to post "$$name_1"
  And I wait for 2 seconds
  And I close settings page
  And I wait for 2 seconds
  And I click update page
  And I wait for 2 seconds
  And I click confirm update page
  Then I validate page publication
  When I wait for 2 seconds
  And I click page
  When I wait for 7 seconds
  And I click additional
  And I wait for 2 seconds
  And I click sign out
  And I wait for 2 seconds