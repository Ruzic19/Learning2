var text = ' Lorem ipsum dolor sit amet';
console.log(text);

//1.
const  lengthOfText = text.length;
console.log("**** duljinaStringa:", lengthOfText);

//2.
const indexOfSit = text.indexOf('sit'); //dohvatimo index s kojim pocinje ova rijec
console.log(indexOfSit); 
const sitValue =  text.substring(19,22);
console.log('**** sitValue:',sitValue);

//3.
const newString = text.replace('amet', 'elit');
console.log(newString);

//4.
const combinedString = text + ', consectetur adipiscing elit';
console.log(combinedString);

//5.
const upperCasing = text.toUpperCase();
console.log(upperCasing);

//6. 
const trimmedText = text.trim(); // mice na pocetku i kraju sve praznine u stringu
console.log(trimmedText);

//7.
const letterAt12 = text.charAt(12);
console.log(letterAt12);
