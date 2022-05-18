Feature: Theme Settings 

  Scenario Outline: As a user, I can change the theme

    Given I am on the theme page
    When I change the theme to <theme> 
    Then I can see the background color is <color>

    Examples:
      | theme     | color         | 
      | Terminal  | rgba(0,0,0,0) | 
