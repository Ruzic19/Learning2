var min = function(list){
    let i = 0;
    let min = list[0];
    while (i < list.length) {
      if ( list[i] < min ) {
        min = list[i];
      }
      i++; 
    }    
      return min;
  }
  
  var max = function(list){
    let i = 0;
    let max = list[0];
    while (i < list.length) {
      if ( list[i] > max ) {
        max = list[i];
      }
      i++; 
    }    
      return max;
  }

  /*
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
*/