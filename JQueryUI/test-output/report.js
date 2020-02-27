$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:feature/JQueryUI.feature");
formatter.feature({
  "name": "Check if the Home page of JQueryUI works",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open JQueryUI homepage with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.open_JQueryUI_homepage_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on Resize button and see if we can resize the box",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Resizable tab under interaction",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.click_on_Resizable_tab_under_interaction()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call the method from WebAPI named as resizeElement",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.call_the_method_from_WebAPI_named_as_resizeElement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open JQueryUI homepage with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.open_JQueryUI_homepage_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on checkbox/radio tab and see if the radio buttons work",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on checkbox/radio under Widgets",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.click_on_checkbox_radio_under_Widgets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the iframe to reach to checkbox/radio buttons",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.select_the_iframe_to_reach_to_checkbox_radio_buttons()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: null value in entry: id\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:892)\n\tat common.WebAPI.iframeHandle(WebAPI.java:472)\n\tat stepDefinitions.JQueryUI.select_the_iframe_to_reach_to_checkbox_radio_buttons(JQueryUI.java:43)\n\tat ✽.Select the iframe to reach to checkbox/radio buttons(file:///Users/sanuwar/IdeaProjects/Bootcamp_WeekDays_Selenium_December2019/JQueryUI/feature/JQueryUI.feature:14)\n",
  "status": "failed"
});
formatter.step({
  "name": "Call the method from WebAPI named as radioButton to handle three button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.call_the_method_from_WebAPI_named_as_radioButton_to_handle_three_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open JQueryUI homepage with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.open_JQueryUI_homepage_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on checkbox/radio tab and see if checkbox works",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on checkbox/radio under Widgets",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.click_on_checkbox_radio_under_Widgets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the iframe to reach to checkbox/radio buttons",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.select_the_iframe_to_reach_to_checkbox_radio_buttons()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: null value in entry: id\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:892)\n\tat common.WebAPI.iframeHandle(WebAPI.java:472)\n\tat stepDefinitions.JQueryUI.select_the_iframe_to_reach_to_checkbox_radio_buttons(JQueryUI.java:43)\n\tat ✽.Select the iframe to reach to checkbox/radio buttons(file:///Users/sanuwar/IdeaProjects/Bootcamp_WeekDays_Selenium_December2019/JQueryUI/feature/JQueryUI.feature:20)\n",
  "status": "failed"
});
formatter.step({
  "name": "Call the method from WebAPI named as checkBox for the first checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.call_the_method_from_WebAPI_named_as_checkBox_for_the_first_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Call the method from WebAPI named as checkBox for the second checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.call_the_method_from_WebAPI_named_as_checkBox_for_the_second_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Call the method from WebAPI named as checkBox for the third checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.call_the_method_from_WebAPI_named_as_checkBox_for_the_third_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Call the method from WebAPI named as checkBox for the fourth checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.call_the_method_from_WebAPI_named_as_checkBox_for_the_fourth_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open JQueryUI homepage with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.open_JQueryUI_homepage_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on droppable tab and see if the drag and drop work",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on droppable tab under interaction",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.click_on_droppable_tab_under_interaction()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the iframe to reach to drag and drop objects",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.select_the_iframe_to_reach_to_drag_and_drop_objects()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: null value in entry: id\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:892)\n\tat common.WebAPI.iframeHandle(WebAPI.java:472)\n\tat stepDefinitions.JQueryUI.select_the_iframe_to_reach_to_drag_and_drop_objects(JQueryUI.java:87)\n\tat ✽.Select the iframe to reach to drag and drop objects(file:///Users/sanuwar/IdeaProjects/Bootcamp_WeekDays_Selenium_December2019/JQueryUI/feature/JQueryUI.feature:29)\n",
  "status": "failed"
});
formatter.step({
  "name": "Call the method from WebAPI named as dragAndDrop to see if it works",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.call_the_method_from_WebAPI_named_as_dragAndDrop_to_see_if_it_works()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open JQueryUI homepage with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.open_JQueryUI_homepage_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on dialog tab and see if the popup works",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on dialog under Widgets",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.click_on_dialog_under_Widgets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the iframe to reach to the popupbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.select_the_iframe_to_reach_to_the_popupbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Investigate if popup is displayed with assert command",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.investigate_if_popup_is_displayed_with_assert_command()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open JQueryUI homepage with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.open_JQueryUI_homepage_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on dialog tab and see if we can close popup",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on dialog under Widgets",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.click_on_dialog_under_Widgets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the iframe to reach to the popupbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.select_the_iframe_to_reach_to_the_popupbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Handle the iframe to go inside the popupbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.handle_the_iframe_to_go_inside_the_popupbox()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: null value in entry: id\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:892)\n\tat common.WebAPI.iframeHandle(WebAPI.java:472)\n\tat stepDefinitions.JQueryUI.handle_the_iframe_to_go_inside_the_popupbox(JQueryUI.java:115)\n\tat ✽.Handle the iframe to go inside the popupbox(file:///Users/sanuwar/IdeaProjects/Bootcamp_WeekDays_Selenium_December2019/JQueryUI/feature/JQueryUI.feature:42)\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on X in teh popup box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.click_on_X_in_teh_popup_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open JQueryUI homepage with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.open_JQueryUI_homepage_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Hover mouse on Contribute Tab and see if mouse hover works",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Hover mouse on contribute tab on the top right corner of homepage",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.hover_mouse_on_contribute_tab_on_the_top_right_corner_of_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on contribute CLA to see if its go through",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.click_on_contribute_CLA_to_see_if_its_go_through()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open JQueryUI homepage with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.open_JQueryUI_homepage_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "click on the jqueryui image to see if it works",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on JQuery logo on the top left corner",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.click_on_JQuery_logo_on_the_top_left_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "write a if-else command to see if the image returns the title of homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.write_a_if_else_command_to_see_if_the_image_returns_the_title_of_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open JQueryUI homepage with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.open_JQueryUI_homepage_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "click on the select menu to see if dropdown works",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on select menu under widgets",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.click_on_select_menu_under_widgets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "handle iframe to reach out dropdown menu",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.handle_iframe_to_reach_out_dropdown_menu()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: null value in entry: id\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:892)\n\tat common.WebAPI.iframeHandle(WebAPI.java:472)\n\tat stepDefinitions.JQueryUI.handle_iframe_to_reach_out_dropdown_menu(JQueryUI.java:156)\n\tat ✽.handle iframe to reach out dropdown menu(file:///Users/sanuwar/IdeaProjects/Bootcamp_WeekDays_Selenium_December2019/JQueryUI/feature/JQueryUI.feature:58)\n",
  "status": "failed"
});
formatter.step({
  "name": "call the method named dropDown from WebAPI",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.call_the_method_named_dropDown_from_WebAPI()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open JQueryUI homepage with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.open_JQueryUI_homepage_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "click on right button of mouse and see if it works",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Select resizable under interaciton and rightclick on it",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.select_resizable_under_interaciton_and_rightclick_on_it()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.JQueryUI.close_the_browser()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to close window in 20 seconds\n  (Session info: chrome\u003d80.0.3987.122)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Mds-MacBook-Pro-2.local\u0027, ip: \u0027fe80:0:0:0:cf2:94bc:c519:eb0a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/ds/9jdlb0bd095...}, goog:chromeOptions: {debuggerAddress: localhost:51692}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7dfde0a3668438a81b67640eaf353be7\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\n\tat stepDefinitions.JQueryUI.close_the_browser(JQueryUI.java:174)\n\tat ✽.Close the browser(file:///Users/sanuwar/IdeaProjects/Bootcamp_WeekDays_Selenium_December2019/JQueryUI/feature/JQueryUI.feature:64)\n",
  "status": "failed"
});
});