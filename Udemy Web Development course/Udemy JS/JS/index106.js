//Adding elements and Intermediate Array Techniques



// var output = [];

// function fizzBuzz () {
//   for ( let i = 1; i <= 100; i++) {
//     if  (i % 3 === 0 && i % 5 === 0) {
//       output.push('FizzBuzz');
//     } else if ( i % 5 === 0){
//       output.push('Buzz');                             < ---- Primjer zaatka koristeci FOR LOOP, odmah sve ispise
      
//     } else if (i % 3 === 0) {
//     } else {
//       output.push(i)
//     }
    
//   }
    

//   console.log(output);
// };
// fizzBuzz();



var output = [];
var count = 1;

function fizzBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push('FizzBuzz');
    } else if (count % 3 === 0) {                     // <---------- primjer da zapisuje jedan po jedan BEZ FOR LOOPA, ispisuje output jedan po jedan
        output.push('Fizz');
    } else if (count % 5 === 0) {
        output.push('Buzz');
    } else {
        output.push(count);
    }

    count ++;

    console.log(output);
}


