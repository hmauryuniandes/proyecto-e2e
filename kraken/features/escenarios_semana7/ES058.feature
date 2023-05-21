Feature: Pruebas ghost

@user1 @web
Scenario: ES058 Editar nombre tag campo nombre
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 12 seconds
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
  And I click tag
  And I wait for 2 seconds
  And I click tag list
  And I enter name tag "$name_1"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  Then I validate title tag "$$name_1"
  When I wait for 2 seconds
  And I click tag
  And I wait for 2 seconds
  And I click additional
  And I wait for 2 seconds
  And I click sign out
  And I wait for 2 seconds