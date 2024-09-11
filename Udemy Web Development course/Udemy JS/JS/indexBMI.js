function bmiCalculator(weight,height) {
    var bmi = weight/ (height * height) ;
    bmi = bmi.toFixed(2);
    if (bmi < 18.5) {
      var interpretation = ('Your BMI is '+bmi+ ', so you are underweight.');
      return interpretation; 
    }
    if(bmi >= 18.5 && bmi <= 24.9) {
      var interpretation = ('Your BMI is '+bmi+ ', so you have a normal weight.');
      return interpretation; 
    }
    if (bmi > 24.9) {
      var interpretation = ('Your BMI is '+bmi+ ', so you are overweight.');
      return interpretation; 
      
    }
  }
  
  bmiCalculator(84,1.78); 
  