# phptravels-test

# Guide to set up the framework.
1. First install JDK8 from http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html ( This is needed for selenium server)
2. Install npm from https://nodejs.org/en/download/
3. Set up and start selenium standalone server following the guide here: https://www.npmjs.com/package/selenium-standalone

4.  Setup codeceptjs and webdrivers:
*npm install -g codeceptjs
*npm install -g webdriverio
*npm install -g selenium-webdriver

*Follow the guide on http://codecept.io/quickstart/ if any problems encountered.*


5. Unzip or clone the tests package to Your users home folder.
Install Mochawesome reporter to Your project folder:
*npm install --save-dev mochawesome
6. How to run tests
First selenium server must be started from a separate command line instance:
*selenium-standalone start
In project folder use following co mmands to run the default test set:
*codeceptjs run --reporter mochawesome
If user wants to add more tests to the testrun, then tests should be added to ./tests folder.
7. Reports are stored in project \output folder as mochawesome.html


