package homepage;

import common.WebAPI;
import org.openqa.selenium.chrome.ChromeDriver;
import webelements.WebElement;

public class Homepage extends WebAPI {
    public static void setBrowser1(){
        System.setProperty("webdriver.chrome.driver","/Users/sanuwar/IdeaProjects/Bootcamp_WeekDays_Selenium_December2019/Generic/BrowserDriver/mac/chromedriver");
        ChromeDriver driver = new ChromeDriver();
        driver.navigate().to("https://www.google.com/");
        driver.manage().window().maximize();
    }
}

