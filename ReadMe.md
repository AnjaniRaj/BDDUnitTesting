# Basic Cucumber
This repository is made for [In Support of BDD for Unit Testing]() article published on medium.

### Sonar report
For generating a sonar report with coverage for unit tests written with Cucumber
- Install [sonarqube] server and run it.
- Run the following commands (Check POM in repo for reference dependencies and plugins)

```
//test will generate test classes, verify will generate jacoco.exec
mvn clean compile test verify sonar:sonar
```

### Extent Report
After running TestRunner, extent report will be generated in test-output/extent/HtmlReport/ExtentHtml.html
