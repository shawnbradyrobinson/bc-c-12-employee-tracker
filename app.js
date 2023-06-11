const mainInquire = require("./inquirer-files/inquirer.js");
const startDB = require("./inquirer-files/start-db.js");
const fs = require("fs"); 

startDB.startDB();
mainInquire.startTracker();

//Need to add a loop or something to keep prompting the user until they want to exit...once they userEnd = true, then stop the program. While loop??? Also, look into inquirer because I know way back when we first learned inquirer there was a way to handle this stuff...