
/// MANIPULATING TEXT WITH JQUERY



//      sintaksa dole je ista kao da sam napisao --> ' document.querySelect('h1').style.color('red'); '
// -- > $('h1').addClass('big-title margin-50'); // dodavanje vise klasa odjednom, samo ih razmak razdvaja



// -- > $('h1').text('bye') // umjesto . innerText

// -- > $('button').html('<em>Hey</em>') // umjesto .innerHTML


// ------------------------------------------------------------------------------------------------------ //


/// MANIPULATING ATRIBUTES USING JQUERY



//  -- > console.log($('img').attr('src')); // getting the value of an attribute
// -- > $('a').attr('href', 'https://www.yahoo.com'); // setting a new value of an attribute


// ------------------------------------------------------------------------------------------------------ //


/// ADDING EVENT LISTENERS USING JQUERY


// This is a function which lets me change the color of my h1 element by clicking any of the buttons
/*
for (var i = 0; i < 5; i++) {
    document.querySelectorAll('button')[i].addEventListener('click',function(){
        document.querySelector('h1').style.color = 'purple'
    })
}
 */


    // THIS is the SAME function as the above one, just typed using jQuery
$('button').click(function(){
    $('h1').css('color','purple')
})

// same function as the one in the Drum Kit Starting Files
/*
$(document).keypress(function(event) {
    $('h1').text(event.key) ;
    
})
*/

$('h1').on('click', function(){ // another way of using a method
    $('h1').css('color','purple')
});
