var humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears == 1 ) return [1,15,15]
    if (humanYears == 2) return [2,24,24]
    return [humanYears,24 +(humanYears -2) * 4, 24 + (humanYears - 2) * 5];
  }


/*
const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;
  
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears,catYears,dogYears];
}
  */