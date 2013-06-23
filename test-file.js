fs = require('fs');
fs.readFile('test1.js','utf-8', function (err, data){
if (err) {
	return console.log (err);
}
 console.log(data);
});


