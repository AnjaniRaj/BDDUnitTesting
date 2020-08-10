$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Add.feature");
formatter.feature({
  "name": "Add numbers",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UnitTesting"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add positive numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "two positive numbers \"\u003cthisNumber\u003e\" and \"\u003cthatNumber\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "they are added the output must be \"\u003cresult\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "thisNumber",
        "thatNumber",
        "result"
      ]
    },
    {
      "cells": [
        "1",
        "1",
        "2"
      ]
    },
    {
      "cells": [
        "2",
        "3",
        "5"
      ]
    },
    {
      "cells": [
        "0",
        "2",
        "0"
      ]
    },
    {
      "cells": [
        "-2",
        "8",
        "0"
      ]
    },
    {
      "cells": [
        "3",
        "-1",
        "0"
      ]
    },
    {
      "cells": [
        "-2",
        "-2",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add positive numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UnitTesting"
    }
  ]
});
formatter.step({
  "name": "two positive numbers \"1\" and \"1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.twoPositiveNumbersAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they are added the output must be \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.theyAreAddedTheOutputMustBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add positive numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UnitTesting"
    }
  ]
});
formatter.step({
  "name": "two positive numbers \"2\" and \"3\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.twoPositiveNumbersAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they are added the output must be \"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.theyAreAddedTheOutputMustBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add positive numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UnitTesting"
    }
  ]
});
formatter.step({
  "name": "two positive numbers \"0\" and \"2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.twoPositiveNumbersAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they are added the output must be \"0\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.theyAreAddedTheOutputMustBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add positive numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UnitTesting"
    }
  ]
});
formatter.step({
  "name": "two positive numbers \"-2\" and \"8\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.twoPositiveNumbersAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they are added the output must be \"0\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.theyAreAddedTheOutputMustBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add positive numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UnitTesting"
    }
  ]
});
formatter.step({
  "name": "two positive numbers \"3\" and \"-1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.twoPositiveNumbersAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they are added the output must be \"0\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.theyAreAddedTheOutputMustBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add positive numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UnitTesting"
    }
  ]
});
formatter.step({
  "name": "two positive numbers \"-2\" and \"-2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.twoPositiveNumbersAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they are added the output must be \"0\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.anjani.stepdefinitions.AddStepDef.theyAreAddedTheOutputMustBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});