// Load or 'Require' the class you created
const Account = require("./accounting.js");

// Create an object from the exported class
const myAccount = new Account("Enrique");
myAccount.credit(150);
console.log(myAccount.describe());