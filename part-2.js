/* This Program lists the first 100 prime numbers */


var num = 2;
var divisor, remainder;
var prime_status;
var counter = 1; 

var fs = require('fs');

var num_list = [];  /* Array that holds the prime number */


 while (counter <= 100)
   {
   
   for (divisor = 1; divisor <= num; divisor++)
    {
        remainder = num % divisor;
        if ((remainder == 0) && (divisor != num) && (divisor != 1))
	{
         prime_status = 'false';             
         break; 
	}
 
        else
        {
         prime_status = 'true';  
        } 
		  
    }
 
   if (prime_status == 'true')
   {   
   num_list.push(num);
   counter = counter + 1;   
   }
     num = num + 1;
    
}

console.log(num_list.length);
console.log(num_list);
console.log(counter);


/* Code to store the prime numbers in the file */

fs.writeFile("PrimeNumberList.txt", num_list, function(err){
	if(err) {
	console.log(err);
	}
	else
	{
	console.log("The file was saved!");
 	}
});


