package runnerClass;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "/Users/sanuwar/IdeaProjects/Bootcamp_WeekDays_Selenium_December2019/JQueryUI/feature",
        glue = "stepDefinitions",
        dryRun = false,
        monochrome = true,
        plugin = {"pretty", "html:test-output"})


public class RunnerClass {
}
