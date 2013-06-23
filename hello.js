/* This Program writes a string to a file */


var fs = require ('fs');
var message = "A startup is a business built to grow rapidly.\n"; /* Text to write in a file*/
var fileName = "hello.txt";
fs.writeFile("hello.txt",message, function(err){
	if(err) {
	console.log(err);
	}
	else {
	console.log("The text: " + message + " has been succesfuly saved in the file " + fileName);
        }
});

       

