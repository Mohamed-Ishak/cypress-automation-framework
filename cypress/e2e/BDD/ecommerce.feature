Feature: E2E  Ecommeece Validation

    Scenario: Ecommerce product deliviry
        Given I open Ecommarce page
        When  I add Items to cart
        Then  Validate the Total prices
        Then  Select the country submit and verfiy success message


    Scenario: Validate filling the form
        Given I open Ecommarce page
        When  Fill the Form Details
        Then   Vlidate the form behaviour
        Then  Click on the Shop tab