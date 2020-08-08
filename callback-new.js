//Synchronised 
var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended1");

//Callback function included

var fs = require("fs");

fs.readFile('input.txt', function (err, data2) {
   if (err) return console.error(err);
   console.log(data2.toString());
});

console.log("Program Ended2");