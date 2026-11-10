Feature: Create New User

Scenario: Create New User with valid data
    Given I open OrangeHRM login page
    When I input username "Admin" and password "admin123"
    And I navigate to Admin User Management page
    And I click Add button
    And I fill user form with User Role "Admin" and Employee Name "John Test Automation" and Status "Enabled" and Username "TestAdmin1" and Password "Estehmanis2gelas" and Confirm Password "Estehmanis2gelas"
    And I click Save button
    Then I able to see the new user in the list