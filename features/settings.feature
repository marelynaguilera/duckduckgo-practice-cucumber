Feature: DuckDuckGo Settings 

  Scenario Outline: As a user, I can change the language

    Given I am on the settings page
    When I change the language to "<language>"
    Then I can see the current language is "<language>"

    Examples:
      | language |
      | Lingvo   | 
