function sumArray(array) {
    if (!array ) return 0;
    if (array.length < 3) return 0;
    //this sorts the array from smallest to biggest
    const sorted = array.sort((n1, n2) => n1 - n2);
    return sorted.slice(1, -1).reduce((t, current) => t + current)
}



// function sumArray(array) {
//     if (array == null) {
//       return 0;
//     } else if (array.length < 2) {
//       return 0;
//     } else {
//       array = array.sort(function(a,b) {return a - b;});
//       var total = 0;
//       for (var i = 1; i < array.length - 1; i++) {
//         total += array[i];
//       }
//       return total;
//     }
//   }
 
