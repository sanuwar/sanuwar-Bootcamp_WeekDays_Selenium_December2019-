package RunnerPackage;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "/Users/sanuwar/IdeaProjects/Bootcamp_WeekDays_Selenium_December2019/Practice_Kode_It/Feature",
        glue = "StepDefinitions",
        dryRun = false,
        monochrome = true,
        plugin = {"pretty", "html:test-output"})



public class CucumberRunnerFile {
}
