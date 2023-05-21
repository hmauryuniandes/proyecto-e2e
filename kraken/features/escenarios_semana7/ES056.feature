Feature: Pruebas ghost

@user1 @web
Scenario: ES056 Ingreso de credenciales invalidas y validas
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter email "$email_1"
  And I wait for 2 seconds
  And I enter password "$name_1"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 2 seconds
  Then I validate login error message
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 1 seconds
  Then I validate login success