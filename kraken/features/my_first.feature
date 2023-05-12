Feature: Pruebas ghost
@user1 @web
Scenario: Modified Fullname on profile
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 5 seconds
  And I expand profile options v4
  And I wait for 1 seconds
  And I user click profile v4
  And I wait for 1 seconds
  And I type new full name "<NEWFULLNAME>"
  And I wait for 1 seconds
  And I user save settings v4
  And I wait for 2 seconds
  Then I newfullname was updated
  And I wait for 1 seconds