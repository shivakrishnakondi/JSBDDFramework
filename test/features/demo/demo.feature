Feature: CURA Web App

    @demo
    Scenario: Navigate to the login screen

        Given the user launches the CURA web app
        When the user clicks on Make Appointment button
        Then the login page should be displayed