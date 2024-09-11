//BASIC ZADATAK BR1


// Step 1 -- Get the current date and time

var today = new Date();


// Step 2 -- Get the day of the week (Sunday is 0, Saturdaj is 6)

var day =today.getDay();

//Step 3 -- Array of names 

var daylist = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//Step 4 -- Display the current day

console.log('Today is '+daylist[day]+ '.');

//Step 5 -- Get the current hour minute and seconds

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Step 6 -- Determin if its AM  or PM 

var zone = (hour >=12) ? 'PM': 'AM';

/*
    Drugi zapis :::::

    let zone;
    if (hour >= 12 ) {
    zone = 'PM';
    } else {
     zone = 'AM'; 
    }

*/

// Step 7 -- Convert 24 h format to 12h

hour = (hour >= 12) ? hour - 12 : hour;

// Step 8 -- Check for cases if hour is 0

if (hour === 0 && zone === 'PM') {
    if (minute === 0 && second === 0) {
        hour = 12;
        zone = 'Noon';
    } else {
        hour = 12;
        zone ='PM';
    }
}

// Step 9 -- Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        zone = ' Midnight';
    } else {
        hour = 12;
        zone = ' AM';
    }
}

// Display the current time
console.log("Current Time: " + hour + zone + " : " + minute + " : " + second); 