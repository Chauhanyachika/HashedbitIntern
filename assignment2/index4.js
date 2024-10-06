function sumOfProducts(n1, n2) {
    // Convert the numbers to strings to easily access individual digits
    let str1 = n1.toString();
    let str2 = n2.toString();

    // Make sure both strings have the same length by padding the shorter one with leading zeros
    while (str1.length < str2.length) {
        str1 = '0' + str1;
    }
    while (str2.length < str1.length) {
        str2 = '0' + str2;
    }

    // Initialize sum to store the result
    let sum = 0;

    // Loop through each digit and calculate the sum of products
    for (let i = 0; i < str1.length; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }

    return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34));  
