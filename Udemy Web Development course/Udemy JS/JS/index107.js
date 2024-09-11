function whosPaying(names) {
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  
    var numberOfPeople = names.length;
    var randomPersonPosition = math.floor(Math.random() * numberOfPeople);
    
    var randomPerson = names[randomPersonPosition];
    return +randomPerson+' is going to buy lunch today!';
  };
  
  whosPaying();