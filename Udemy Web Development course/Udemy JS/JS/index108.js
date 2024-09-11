//WHILE LOOPS

// ------ DOLJE JE PRIMJER S FOR LOOP ------------ //

// var output = [];

// function fizzBuzz () {
//   for ( let i = 1; i <= 100; i++) {
//     if  (i % 3 === 0 && i % 5 === 0) {
//       output.push('FizzBuzz');
//     } else if ( i % 5 === 0){
//       output.push('Buzz');                            
      
//     } else if (i % 3 === 0) {
//         output.push('Fizz');
//     } else {
//       output.push(i);
//     }
    
//   }
    

//   console.log(output);
// };
// fizzBuzz();


// --------------- PRIMJER ISTOG ZADATKA ALI SA WHILE PETLJOM ----------------- //

var output = [];
var count = 1;

function fizzBuzz() {

  while(count <= 100) {
    
    if (count % 3 === 0 && count % 5 === 0) {
      output.push('FizzBuzz');
    } else if (count % 5 === 0) {
      output.push('Buzz');
    } else if (count % 3 === 0) {
      output.push('Fizz');
    }else {
      output.push(count);
    }
    count ++;
    console.log(output);
  }
  
};

fizzBuzz();


// PRIMJER ZADATKA SA WHILE LOOPOM JE NA index109.js FILEU