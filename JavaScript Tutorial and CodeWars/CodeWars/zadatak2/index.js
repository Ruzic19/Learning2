//  Step 1 -- Define a function named print_current_page
function print_current_page() {
    // Step 2 --Call the window.print() method to initiate the printing of the current page
    window.print();
} 

// Step 3 -- Make a button and asign it an event to print on click
var printButton = document.getElementById('button').addEventListener('click',print_current_page);


