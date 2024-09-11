function anotherAddEventListener(eventType, callback) {
    
    //detect event code
    
   /* var keyPresss = {
        eventType = 'keypress',
        key: 'w',
        duration: 2
    }*/
}

if (keyPress.eventType === typeOfEvent) {
    callback(keyPresss);
}

/*function callback ('keypress',function(e) {
    console.log(e);
    
})*/


//gore napisano mi je malo bolje pojasnjenje kako eventove skladistit i pass onnat na druge funkcije kao parametar. Mozda bolje provjeriti vjezbu 'Drum Kit Starting Files' za vidjet koristenje u praksi event.
document.addEventListener('keypress',function(e) {
    console.log(e);
})
