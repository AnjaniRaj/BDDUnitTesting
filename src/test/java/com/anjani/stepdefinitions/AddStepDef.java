package com.anjani.stepdefinitions;

import anjani.fucntions.Add;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class AddStepDef {
    int a, b;

    @Given("two positive numbers {string} and {string}")
    public void twoPositiveNumbersAnd(String num1, String num2) {
        a = Integer.parseInt(num1);
        b = Integer.parseInt(num2);
    }

    @When("they are added the output must be {string}")
    public void theyAreAddedTheOutputMustBe(String sum) {
        Add add = new Add();
        Assert.assertEquals(Integer.parseInt(sum), add.addPositiveNumbers(a, b));
    }
}
