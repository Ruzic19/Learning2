

const randomNumber1 = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber1);
 const randomNumber2 = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber2);


var randomDiceImg1 = 'dice' +randomNumber1+ '.png';
console.log(randomDiceImg1);
var randomDiceImg2 = 'dice' +randomNumber2+ '.png';
console.log(randomDiceImg2);

var imageRandomSource = 'images/'+randomDiceImg1;
console.log(imageRandomSource);
var imageRandomSource2 = 'images/'+randomDiceImg2;
console.log(imageRandomSource2);


var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src',imageRandomSource);

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src',imageRandomSource2);


if( randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '😄Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins!😄';
} else {
    document.querySelector('h1').innerHTML = "It's a tie! Refresh again!";

}


//----------------------------------------------------




