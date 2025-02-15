// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============


const calculator =document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');
const calculate = (n1, operator, n2) => {
    let result ='';
    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2);
    } else if( operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply'){
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2);
    }
    return result;
}

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))

        if (!action) {
            //console.log('number key!');
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number';
        } 
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ){
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            //console.log('operator key!');
        }
         else if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
            //console.log('decimal key!');
        }
        else if (action === 'clear') {
            display.textContent = '0';
            calculator.dataset.previousKeyType = 'clear';
            //console.log('clear key!');
        }

         else if (action ==='calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator; 
            const secondValue = displayedNum;
            if (firstValue && operator) {
                display.textContent = calculate(firstValue, operator, secondValue);
            } else {
                display.textContent = '0';
            }
            
            calculator.dataset.previousKeyType = 'calculate';
            //console.log('equal key!');
        }

    }
})