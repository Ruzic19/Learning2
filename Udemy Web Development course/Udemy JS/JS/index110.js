
// FIBONACCI SEQUENCE GENERATOR

function fibonacciGenerator(n) {

    var output =[];

    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0,1];
    } else {
        output = [0,1];

        for( var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
            
        } 
        
        
        
    }


    return output;
    console.log(output);

    
}


fibonacciGenerator(10);


// u for loop nam ulazi brojilo i = 2 jer mora biti manji od N da bi se izvrtile statements, i u tom zadnjem statementu radimo sljedece :
// dodajemo novi broj na zadnje mjesto u arrayu tako da se zbroje posljednja dva elementa i taj broj je onda na zadnjem mjestu.