//  1. VARIABLES (var, let, const) ---------------------------------------------------------

// const can change the value, if the value needs to be overritten then we use the let

// const balance = 2000;   EXAMPLE
// const description = 'Salary'; EXAMPLE
// const newTransaction = true; EXAMPLE

// ovo je primjer kako mozemo promjeniti value bez da diramo html: --> 'const balanceNumberEl = document.querySelector('.balance-number');'
// --> 'balanceNumberEl.textContent = balance; EXAMPLE'

// console.log(1000); --> primjer kako izgleda console log u developer toolsima od browsera. takodjer pored ispisa pokazuje na kojoj liniji koda se nalazi log.


// 2. DATA TYPES & STRUCTURES (strings, numbers, booleans, arrays, objects) ------------------------------------------------------------------------------------

// const text = 'Hello';  STRING EXAMPLE
// const salary = 2000 ;  NUJMBER EXAMPLE
// const isExpanse = false ; BOOLEAN EXAMPLE
// const expenses = [1000, 25, 30];  ARRAY EXAMPLE

// const transaction = {
//     description: 'salary',
//     ammount : 5000
// };  

//OBJECT EXAMPLE ^^

//objekti kao ovi gore 'transaction' malo vise strukturiraju kod i informacija bude u jednom objektu pa je lakse za traziti, troubleshootat i isprobavat.

 // console.log(expenses); --> expenses je u ovom slucaju array, ovim zapisom u konzoli cemo vidjeti koliko elemenata ima u listi, pozicije na kojima je koji element i u kojoj se liniji koda nalazi ovaj console.log.


 // 3. FUNCTIONS ( traditional functions() vs arrow functions() => {}  ) ---------------------------------------------------------------------------------------

// Traditional Functions @@


 //function declaration -- ovo je samo jedan od nacina za deklariranje funckije, mozemo umjesto parametara u () napisati kao const varijable takodjer ili let
//  function calculateBalance(income, expenses) {
//     const balance = income - expenses;
//     return balance;                     // iznos je returnan u sam naziv funkcije, mozemo ispisat sa console.log ili pohraniti rezultat u drugu varijablu
//  }

 // const result = calculateBalance(10000,5000);
  // kada napravimo funkciju kao gore, moramo ju onda kasnije pozvati u kodu da bi se izvrsila.

 //stariji nacin zapisa : function expression:

//  var calculateBalance = function(income,expenses) {
//     const balance = income - expenses;
//     return balance;
//  } ;  c// ovo je nacin da odmah napisemo varijablu  u kojoj se izvrsi funkcija. paziti na ; na kraju jer je var statement. 


// ArrowHead Functions @@ -modern way of writing

// const calculateBalance = () => {
//     const balance = income - expenses;
//     return balance;
// };

// const result = calculateBalance(10000,5000);
// console.log(result);



// 4. INTERACTING WITH HTML & CSS 
//(DOM manipulation - document object model manipulation)------------------------------------------------------------------------------------------------------------------

//const balanceEl = document.querySelector('.balance-number');
//gore napisano je primjer kako u novu varijablu dodamo postojecu css klasu, odnosno element s tom klasom

// balanceEl.addEventListener('click', () => {
// balanceEl.classList.add('balance-number--special');
// }); <--- Ovo je primjer kako mozemo manipulirati css unutar samog JS, ovim primjerom oznacavamo event 'click' i kada se taj event dogodi triggera se funkcija () => koja dodjeljuje na click jos jednu klasu koja se zove 'balance-number--special'

//balanceEl.textContent = 'Unavailable'; <--- ovime mjenjamo sami tekst unutar HTML elementa

//balanceEl.innerHTML = '<span class="special">Unavailable</span>'; <--- ovime stvaramo novi element unutar naseg HTML-a.


// 5. SCOPING AND HOISTING -----------------------------------------------------------------------
// function addTransaction() {
//     const amount = 5000;
//     console.log(amount);
// }


// 6. IF / ELSE STATEMENTS -----------------------------------------------------------------------
 // const balance = 2000;
// jedan nacin zapisa if else zapisa, a ni nije potreban else nekada

// if (balance > 0) {
//     console.log('Positive');
// } else {
//     console.log('Negative');
// }


// drugi nacin zapisa gore navedene if else statementa

//balance < 0 ? console.log('positive') : console.log('negative') ;

// gore funkcija znaci ako je balance < 0 , i sa : se odvajaju if i else


// 7. OPERATORS (+, -, >, <, >=, <=, ==, ===, !, &&, ||) -----------------------------------------------------------------------
// = this is assigning to a variable, == this means if something is equal, === this checks also the variable type(strictly eaqual a num type and num type. a string ! number)

// && both conditions MUST be true to run the true statement, 
// || one OR the other condition must be true to run the true statement.


// 8. LOOPS (forEach vs for) -----------------------------------------------------------------------
//  const incomes = [5000, 200, 100];

// //  incomes.forEach((income) => {
// //     console.log(income + 10);

// //  });



// for (let i = 0; i < 3; i++) {
//   console.log(incomes[i])
// };



