@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    

    #TODO: Create scenarios that cover all the acceptance criteria
    
    Background:
        Given user is on the enrollment page

        
    Scenario: Click on the next button on step 1 with all fields
        When I fill in all the fields with valid information
        And I click on the next button
        Then I should be taken to step 2

    Scenario: Click on the next button on step 1 with only required fields
        When I fill in only the required fields with valid information
        And I click on the next button
        Then I should be taken to step 2

    Scenario: Click on the next button on step 1 with empty fields
        When I leave all the fields empty
        Then I should see input labels turn red