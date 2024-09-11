
var output ='';
var newOutput ='';
var count = 99;

while (count < 100 && count > 1) {
    
    if (count <100 && count > 0) {
            output = +count+' bottles of beer on the wall, '+count+' bottles of beer';
            count--;
            newOutput = 'Take one down , pass it arround '+count+' bottles of beer on the wall';   //<----------- MOJ oblik rjesenja
            console.log(output);
            console.log(newOutput);
     
    } else if (count === 1) {
        output = +count+' bottle of beer on the wall, '+count+' bottle of beer';
        count--;
        newOutput = 'Take one down , pass it arround no more bottles of beer on the wall';
        console.log(output);
        console.log(newOutput);   

    }

}

output = 'No more bottles of beer on the wall, no more bottles of beer.';
newOutput = 'Go to the store and buy some more, 99 bottles of beer on the wall.';
console.log(output);
console.log(newOutput);







// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");   // <-- NJENO rijesenje
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }







