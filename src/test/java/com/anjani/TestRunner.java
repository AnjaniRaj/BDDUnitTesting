package com.anjani;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Add.feature",
        glue = "com.anjani.stepdefinitions",
        plugin = {"pretty", "html:test-output", "html:target/cucumber-html-report", "json:target/json-report", "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"}, //to generate different types of reporting
        tags = {"@UnitTesting"},
        monochrome = true)
public class TestRunner {
}
