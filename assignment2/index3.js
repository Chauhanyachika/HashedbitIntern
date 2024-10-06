function findTax(salary) {
    let tax;

    if (salary > 0 && salary <= 500000) {
        tax = 0;
    } else if (salary > 500000 && salary <= 1000000) {
        tax = salary * 0.10;
    } else if (salary > 1000000 && salary <= 1500000) {
        tax = salary * 0.20;
    } else if (salary > 1500000) {
        tax = salary * 0.30;
    } else {
        tax = "Invalid salary amount";
    }

    return tax;
}

// Example usage:
console.log(findTax(400000));   // 0
console.log(findTax(750000));   // 75000 (10% of 750000)
console.log(findTax(1200000));  // 240000 (20% of 1200000)
console.log(findTax(2000000));  // 600000 (30% of 2000000)
console.log(findTax(-50000));   // Invalid salary amount
