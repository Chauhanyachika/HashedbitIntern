function repeatedSumOfDigits(num) {
    
    const sumDigits = (n) => {
        return String(n) 
            .split('') 
            .reduce((acc, digit) => acc + digit, 0); 
    };

    
    while (num >= 10) {
        num = sumDigits(num);
    }

    return num; 
}


const result = repeatedSumOfDigits(456);
console.log(result);  
