Feature: Check if the Home page of JQueryUI works

  Background:
    Given Open JQueryUI homepage with chrome browser

  Scenario: Click on Resize button and see if we can resize the box
    When Click on Resizable tab under interaction
#    Then Transfer to new Window
    Then  Call the method from WebAPI named as resizeElement
    And Close the browser

  Scenario: Click on checkbox/radio tab and see if the radio buttons work
    When Click on checkbox/radio under Widgets
    Then Select the iframe to reach to checkbox/radio buttons
    Then  Call the method from WebAPI named as radioButton to handle three button
    And Close the browser

  Scenario: Click on checkbox/radio tab and see if checkbox works
    When Click on checkbox/radio under Widgets
    Then Select the iframe to reach to checkbox/radio buttons
    Then  Call the method from WebAPI named as checkBox for the first checkbox
    Then Call the method from WebAPI named as checkBox for the second checkbox
    Then Call the method from WebAPI named as checkBox for the third checkbox
    Then Call the method from WebAPI named as checkBox for the fourth checkbox
    And Close the browser

  Scenario: Click on droppable tab and see if the drag and drop work
    When Click on droppable tab under interaction
    Then Select the iframe to reach to drag and drop objects
    Then  Call the method from WebAPI named as dragAndDrop to see if it works
    And Close the browser

  Scenario: Click on dialog tab and see if the popup works
    When Click on dialog under Widgets
    Then Select the iframe to reach to the popupbox
    Then  Investigate if popup is displayed with assert command
    And Close the browser

  Scenario: Click on dialog tab and see if we can close popup
    When Click on dialog under Widgets
    Then Select the iframe to reach to the popupbox
    Then  Handle the iframe to go inside the popupbox
    Then Click on X in teh popup box
    And Close the browser

  Scenario: Hover mouse on Contribute Tab and see if mouse hover works
    When Hover mouse on contribute tab on the top right corner of homepage
    Then click on contribute CLA to see if its go through
    And Close the browser

  Scenario: click on the jqueryui image to see if it works
    When click on JQuery logo on the top left corner
    Then write a if-else command to see if the image returns the title of homepage
    And Close the browser

  Scenario: click on the select menu to see if dropdown works
    When click on select menu under widgets
    Then handle iframe to reach out dropdown menu
    And call the method named dropDown from WebAPI
    And Close the browser

  Scenario: click on right button of mouse and see if it works
    When Select resizable under interaciton and rightclick on it
    And Close the browser






