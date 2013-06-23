/*
var a;

for (a=0; a < 100; a++)
{
 b = a % 2;
 console.log(b+ "\n");
}
*/

var num;
var divisor, remainder;
var prime_status;

var fs = require('fs');
//fs.writeFile("NotPrimeList.txt", num_list, function(err) {



var num_list = [];
/*var id = 0;*/

for (num = 2; num < 1000; num++)
{
   for (divisor = 1; divisor <= num; divisor++)
   {
        remainder = num % divisor;
        if ((remainder == 0) && (divisor != num) && (divisor != 1))
	{
         //console.log('The number' + num + 'is not prime');
        // console.log (num);    
        // num_list.push(num);
         prime_status = 'false';             
         break; 
	}
 
        else
        {
        
        // num_list.push(num);
        prime_status = 'true';  
        } 
		  
   }

   if (prime_status == 'true')
   {   
   num_list.push(num);
   }
    
}

list_size = num_list.length;

console.log(num_list.length);
console.log(num_list);

//var fs = require('fs');
fs.writeFile("notPrimeNumber.txt", num_list, function(err){
	if(err) {
	console.log(err);
	}
	else
	{
	console.log("The file was saved!");
 	}
});

/*
var output = num_list.filter(function(x) {return x>= 80;});
console.log("The output is: " + output);
*/

/*

for (j=2; j <= 100; j++)
{

  for (t=0; t< list_size; t++)
  {
   if (num_list[t] == j )
    {
      prime_list.push(j);

    }


  }    
  
  

} 


*/
