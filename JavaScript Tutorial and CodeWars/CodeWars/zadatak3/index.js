/*3. Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/


// Step 1 -- defined a variable to store the current date and displayed it in the innerHTML
let d = new Date();
document.getElementById('demo').innerHTML = d;

//Step 2 -- create day month and year variables to store the information from the 
let day = document.getElementById('demo2').innerHTML = d.getDate();
let month = document.getElementById('demo3').innerHTML = d.getMonth()+1;
const year =document.getElementById('demo4').innerHTML = d.getFullYear();


if (day < 10) {
    day = '0'+ day;
}

if (month < 10) {
    month = '0' + month;
}

d = month+' - '+day+' - '+year;
console.log(d);
var d2 = month+' / ' +day+' / '+year;
console.log(d2);
var d3 = day+ ' / '+month+' / '+year;
console.log(d3);
var d4 = day+ ' - '+month+' - '+year;
console.log(d4);
