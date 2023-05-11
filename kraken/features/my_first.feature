Feature: Pruebas ghost
@user1 @web
Scenario: Cambiar estilo a través del code-injection
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 10 seconds
  And I navigate to code injection
  And I wait for 2 seconds
  And I type style on header "<STYLEHEADER>"
  And I user save settings
  And I wait for 2 seconds
  Then I title was updated
  And I wait for 1 seconds