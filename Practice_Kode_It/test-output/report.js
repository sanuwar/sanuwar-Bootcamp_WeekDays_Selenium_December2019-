$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Practice.feature");
formatter.feature({
  "name": "Check if the Home page of Practice: Lets Kode it works",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open Practice: Lets Kode it with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Practice.open_Practice_Lets_Kode_it_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on Open Window Tab and see it we can transfer to new window",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Open Window Tab under Switch Window Example",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Practice.click_on_Open_Window_Tab_under_Switch_Window_Example()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Transfer to new Window",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Practice.transfer_to_new_Window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Webdriver Tab from new Window",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Practice.click_on_Webdriver_Tab_from_new_Window()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div/div/div[2]/div[1]/div/div[1]/a/div/div[1]/img\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Mds-MacBook-Pro-2.local\u0027, ip: \u0027fe80:0:0:0:cf2:94bc:c519:eb0a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/ds/9jdlb0bd095...}, goog:chromeOptions: {debuggerAddress: localhost:51292}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6388d11f43d6d1123d3397fbf97b9230\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div/div/div[2]/div[1]/div/div[1]/a/div/div[1]/img}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat common.WebAPI.clickOnElement(WebAPI.java:187)\n\tat StepDefinitions.Practice.click_on_Webdriver_Tab_from_new_Window(Practice.java:31)\n\tat ✽.Click on Webdriver Tab from new Window(file:///Users/sanuwar/IdeaProjects/Bootcamp_WeekDays_Selenium_December2019/Practice_Kode_It/Feature/Practice.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Practice.close_the_browser()"
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
  "name": "Open Practice: Lets Kode it with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Practice.open_Practice_Lets_Kode_it_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on Switch Tab and see it we can transfer to new window",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Open Tab under Switch Tab Example",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Practice.click_on_Open_Tab_under_Switch_Tab_Example()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Transfer to new Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Practice.transfer_to_new_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on something from new Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Practice.click_on_something_from_new_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Practice.close_the_browser()"
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
  "name": "Open Practice: Lets Kode it with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Practice.open_Practice_Lets_Kode_it_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on Alert Handling and see if we can accept the alert.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Alert Comfirm button under Switch Alert Example",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Practice.click_on_Alert_Comfirm_button_under_Switch_Alert_Example()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:22088\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Mds-MacBook-Pro-2.local\u0027, ip: \u0027fe80:0:0:0:cf2:94bc:c519:eb0a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u002713.0.1\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat common.WebAPI.clickOnElement(WebAPI.java:187)\n\tat StepDefinitions.Practice.click_on_Alert_Comfirm_button_under_Switch_Alert_Example(Practice.java:62)\n\tat ✽.Click on Alert Comfirm button under Switch Alert Example(file:///Users/sanuwar/IdeaProjects/Bootcamp_WeekDays_Selenium_December2019/Practice_Kode_It/Feature/Practice.feature:19)\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:22088\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat common.WebAPI.clickOnElement(WebAPI.java:187)\n\tat StepDefinitions.Practice.click_on_Alert_Comfirm_button_under_Switch_Alert_Example(Practice.java:62)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.base/sun.nio.ch.Net.pollConnect(Native Method)\n\tat java.base/sun.nio.ch.Net.pollConnectNow(Net.java:579)\n\tat java.base/sun.nio.ch.NioSocketImpl.timedFinishConnect(NioSocketImpl.java:542)\n\tat java.base/sun.nio.ch.NioSocketImpl.connect(NioSocketImpl.java:597)\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:339)\n\tat java.base/java.net.Socket.connect(Socket.java:603)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 62 more\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on Ok to accept from Alert popup",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Practice.click_on_Ok_to_accept_from_Alert_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Practice.close_the_browser()"
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
  "name": "Open Practice: Lets Kode it with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Practice.open_Practice_Lets_Kode_it_with_chrome_browser()"
});
