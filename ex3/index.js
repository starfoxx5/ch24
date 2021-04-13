// Load the Express package as a module
const moment = require("moment");

// Create an object to get current date
const now = moment().format('dddd, MMMM Do, YYYY');
console.log(now);

// Create an object to compute 
// number of years since 1976, November 26

const yearDif = moment("11/26/1976", "MM/DD/YYYY").fromNow().split(" ")[0];
console.log(`${yearDif} years go`);

