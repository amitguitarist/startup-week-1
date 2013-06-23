var fs = require('fs');
var data = "A startup is a business built to grow rapidly. \n";
var nameOfFile = "testFile.txt";

fs.writeFile(nameOfFile, data, function (err){
	if(err) {
	console.log(err);
	}
	else
	{	
	console.log("The text: " + data + " is successfully saved in the file " + nameOfFile);
	}
	
});
