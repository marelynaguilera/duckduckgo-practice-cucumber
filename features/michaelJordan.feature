Feature: DuckDuckGo search 

  Scenario Outline: As a user, I want to verify results from my search

    Given I am on the home page
    When I search "<q>" 
    Then a picture of "<q>" is displayed in the search results page
    And there is at least one "wikipedia" page result
    And there is at least one "nba.com" page result

    Examples:
      | q               | 
      | Michael Jordan  | 
