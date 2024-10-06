function calculate(num1, num2, operation) {
    let res;

    switch(operation) {
        case 'add':
            res = num1 + num2;
            break;
        case 'subtract':
            res = num1 - num2;
            break;
        case 'multiply':
            res = num1 * num2;
            break;
        case 'divide':
            res= num1/num2;
            break;
        default:
            res = "Invalid operation";
    }

    return res;
}


console.log(calculate(10, 5, 'add'));      
console.log(calculate(10, 5, 'subtract')); 
console.log(calculate(10, 5, 'multiply')); 
console.log(calculate(10, 5, 'divide'));   

