package stepDefinitions;

import home.WebElementHomepage;
import io.cucumber.java.en.*;
import org.openqa.selenium.By;
import org.testng.Assert;

import static home.Homepage.*;

public class JQueryUI extends WebElementHomepage {

    @Given("Open JQueryUI homepage with chrome browser")
    public void open_JQueryUI_homepage_with_chrome_browser() {
        getLocalDriver("mac", "chrome");
        driver.get("https://jqueryui.com");

    }

    @When("Click on Resizable tab under interaction")
    public void click_on_Resizable_tab_under_interaction() {
        clickOnElement(xPathResizeableButton);
    }

//    @Then("Transfer to new Window")
//    public void transfer_to_new_Window() {
//    }

    @Then("Call the method from WebAPI named as resizeElement")
    public void call_the_method_from_WebAPI_named_as_resizeElement() throws InterruptedException {
        resizeElement(xPathResizeFrameLocator, xPathResizeSnippet);
        sleepFor(2);
    }


    @When("Click on checkbox\\/radio under Widgets")
    public void click_on_checkbox_radio_under_Widgets() throws InterruptedException {
        clickOnElement(xPathRadioButtonTab);

    }

    @Then("Select the iframe to reach to checkbox\\/radio buttons")
    public void select_the_iframe_to_reach_to_checkbox_radio_buttons() throws InterruptedException {
        iframeHandle(radioFrame);
        //clickOnElement("/html[1]/body[1]/div[1]/fieldset[1]");
        sleepFor(2);

    }

    @Then("Call the method from WebAPI named as radioButton to handle three button")
    public void call_the_method_from_WebAPI_named_as_radioButton_to_handle_three_button() throws InterruptedException {
        radioButton(xPathRadioButton1, xPathRadioButton2, xPathRadioButton3);
        sleepFor(2);
    }


    @Then("Call the method from WebAPI named as checkBox for the first checkbox")
    public void call_the_method_from_WebAPI_named_as_checkBox_for_the_first_checkbox() throws InterruptedException {
        checkBox(xPathCheckboxSelect1);
        sleepFor(2);
    }

    @Then("Call the method from WebAPI named as checkBox for the second checkbox")
    public void call_the_method_from_WebAPI_named_as_checkBox_for_the_second_checkbox() throws InterruptedException {
        checkBox(xPathCheckboxSelect2);
        sleepFor(2);
    }

    @Then("Call the method from WebAPI named as checkBox for the third checkbox")
    public void call_the_method_from_WebAPI_named_as_checkBox_for_the_third_checkbox() throws InterruptedException {
        checkBox(xPathCheckboxSelect3);
        sleepFor(2);
    }

    @Then("Call the method from WebAPI named as checkBox for the fourth checkbox")
    public void call_the_method_from_WebAPI_named_as_checkBox_for_the_fourth_checkbox() {
        checkBox(xPathCheckboxSelect4);
    }

    @When("Click on droppable tab under interaction")
    public void click_on_droppable_tab_under_interaction() {
        clickOnElement(xPathDragAndDropButton);

    }

    @Then("Select the iframe to reach to drag and drop objects")
    public void select_the_iframe_to_reach_to_drag_and_drop_objects() throws InterruptedException {
        iframeHandle(dragAndDropFrame);
        sleepFor(2);
    }

    @Then("Call the method from WebAPI named as dragAndDrop to see if it works")
    public void call_the_method_from_WebAPI_named_as_dragAndDrop_to_see_if_it_works() throws InterruptedException {
        dragAndDrop(xPathDragFrom, xPathDropTo);
        sleepFor(2);
    }

    @Then("Investigate if popup is displayed with assert command")
    public void investigate_if_popup_is_displayed_with_assert_command() {
        Assert.assertTrue(driver.findElement(By.xpath(xPathDialogPopUp)).isDisplayed());
    }

    @When("Click on dialog under Widgets")
    public void click_on_dialog_under_Widgets() {
        clickOnElement(xPathDialogTab);

    }

    @Then("Select the iframe to reach to the popupbox")
    public void select_the_iframe_to_reach_to_the_popupbox() {
        clickOnElement(xPathDialogiFrame);
    }

    @Then("Handle the iframe to go inside the popupbox")
    public void handle_the_iframe_to_go_inside_the_popupbox() {
        iframeHandle(dialogPopUpFrame);
    }

    @Then("Click on X in teh popup box")
    public void click_on_X_in_teh_popup_box() {
        clickOnElement(xPathDialogPopUpClose);
    }

    @When("Hover mouse on contribute tab on the top right corner of homepage")
    public void hover_mouse_on_contribute_tab_on_the_top_right_corner_of_homepage() {
        mouseHoverByXpath(xPathMouseHoverContributeTab);

    }

    @Then("click on contribute CLA to see if its go through")
    public void click_on_contribute_CLA_to_see_if_its_go_through() {
        clickOnElement(xPathMouseHoverContributeCLASelect);
    }

    @When("click on JQuery logo on the top left corner")
    public void click_on_JQuery_logo_on_the_top_left_corner() {
        clickOnElement(xPathJQueryImage);
    }

    @Then("write a if-else command to see if the image returns the title of homepage")
    public void write_a_if_else_command_to_see_if_the_image_returns_the_title_of_homepage() {
        if (driver.getTitle().equals("jQuery UI")) {
            System.out.println("We are back at JQuery homepage");
        } else {
            System.out.println("We are NOT in JQuery homepage");
        }
    }


    @When("click on select menu under widgets")
    public void click_on_select_menu_under_widgets() {
        clickOnElement(xPathJQuerySelectMenuTab);
    }

    @Then("handle iframe to reach out dropdown menu")
    public void handle_iframe_to_reach_out_dropdown_menu() {
        iframeHandle(selectMenuIFrame);
    }

    @Then("call the method named dropDown from WebAPI")
    public void call_the_method_named_dropDown_from_WebAPI() {
        dropDown(xPathJQuerySelectDropDownBar);
    }


    @When("Select resizable under interaciton and rightclick on it")
    public void select_resizable_under_interaciton_and_rightclick_on_it() throws InterruptedException {
        sleepFor(5);
        rightClickMouse(xPathResizeableButton);
        sleepFor(2);
    }

    @When("Close the browser")
    public void close_the_browser() {
        driver.close();
    }

}
