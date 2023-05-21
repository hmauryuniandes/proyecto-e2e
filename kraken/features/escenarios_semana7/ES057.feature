Feature: Pruebas ghost

@user1 @web
Scenario: ES057 Creación de tag
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 10 seconds
  And I click tag
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  When I enter name tag "$string_1"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  Then I validate title tag "$$string_1"
  When I wait for 2 seconds
  And I get text value slug
  And I wait for 2 seconds
  And I click tag
  And I wait for 2 seconds
  And I click tag list
  And I wait for 2 seconds
  And I click delete tag
  And I wait for 2 seconds
  And I click confirm delete
  And I wait for 2 seconds
  Then I search tag
  When I wait for 2 seconds
  And I click additional
  And I wait for 2 seconds
  And I click sign out
  And I wait for 2 seconds