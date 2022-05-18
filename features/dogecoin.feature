Feature: DuckDuckGo search via API

  Scenario Outline: As a user, I want to print URLs retrieved

    Given I am connected to "DuckDuckGo" API
    When I search for "<q>" 
    Then I can print urls retrieved for "<q>" 

    Examples:
      | q           | 
      | dogecoin    | 