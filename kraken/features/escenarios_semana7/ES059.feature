Feature: Pruebas ghost

@user1 @web
Scenario: ES059 Asignar tag a un post
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 15 seconds
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
  And I click post
  And I wait for 2 seconds
  And I click new post
  And I wait for 2 seconds
  And I enter name post "$string_1"
  And I wait for 2 seconds
  And I enter content post "$string_2"
  And I wait for 2 seconds
  And I click post
  And I wait for 2 seconds
  Then I search post "$$string_1"
  And I wait for 2 seconds
  When I click settings post
  And I wait for 2 seconds
  And I assing tag to post "$$name_1"
  And I wait for 2 seconds
  And I close settings post
  And I wait for 2 seconds
  And I click update post
  And I wait for 2 seconds
  And I click confirm update post
  Then I validate post publication
  When I wait for 2 seconds
  And I click post
  When I wait for 10 seconds
  And I click additional
  And I wait for 2 seconds
  And I click sign out
  And I wait for 2 seconds