function countVowelsAndConsonants(inputString) {
    
    const vowels = 'aeiouAEIOU';
    
    let vowelCount = 0;
    let consonantCount = 0;

    
    for (let char of inputString) {
        
        if (/[a-zA-Z]/.test(char)) {
            
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}

// Example string with a minimum of 20 characters
let exampleString = "The quick brown fox jumps over the lazy dog.";

// Call the function and get the counts
let result = countVowelsAndConsonants(exampleString);

// Display the result
console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);
