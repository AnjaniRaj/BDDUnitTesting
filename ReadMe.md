# Basic Cucumber
This repository is made for [In Support of BDD for Unit Testing](https://medium.com/@anjani.madhu97/in-support-of-bdd-for-unit-testing-b0fcd57e82b2) article published on medium.

### Sonar report
For generating a sonar report with coverage for unit tests written with Cucumber
- Install [sonarqube](https://www.sonarqube.org/) server and run it.
- Run the following commands (Check POM in repo for reference dependencies and plugins)

```
//test will generate test classes, verify will generate jacoco.exec
mvn clean compile test verify sonar:sonar
```

### Extent Report
After running TestRunner, extent report will be generated in test-output/extent/HtmlReport/ExtentHtml.html
