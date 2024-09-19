function countPositivesSumNegatives(input) {
    let sumOfNegatives = 0;
    let countPositives = 0;
    if ( input != null && input.length > 0) {
      let i = 0;
      while ( i < input.length) {
        if ( input[i] < 0) {
          sumOfNegatives += input[i];
        } else if ( input [i] > 0){
          countPositives++;
        }
        i++;
      }
      return[countPositives,sumOfNegatives];
    }
    return [];
  }

  /*
  function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) return [];
  var sum = 0, count = 0;
  input.forEach(function(el){ if (el > 0) count++; else sum+=el});
  return [count, sum];
}
  */