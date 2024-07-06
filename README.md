The collection contains API tests for REST endpoints for Swagger Petstore (Base URL: petstore.swagger.io/v2 )
To run the tests, first download the json file and save it locally.
Then import the collection in JSON format in the Postamn app installed locally in you machine.
Tests can be run by clicking on three dots (...) next to the collection name (Swagger Petstore) and then selecting "Run collection" option.
On the next screen, select or deselect tests you would like to run and click on "Run Swagger Petstore" button.

Another way to run the tests is through a CLI like Newman which is built on node.js. To do so , make sure you have node.js installed as well as Newman. Installation instructions can be found at https://learning.postman.com/docs/collections/using-newman-cli/installing-running-newman/
After Newman is installed, download the collection locally in a folder.
To run the collection on command line, use the command --> newman run <<collection_name>>

Alternatively, you can use run_tests.js file to run the tests written in your collection. Change the path of collection to your local path where you have downloaded and saved the collection. 
To run the file, go to terminal and type node run_tests.js
This file also generates a report which will saved in the same folder as your collection and will be named newman_report.html
