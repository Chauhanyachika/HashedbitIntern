function correctfn(sentence, wrong, correct) {
    // Use the replace method to replace the wrong word with the correct one
    return sentence.replace(new RegExp(wrong, 'g'), correct);
}

// Example usage:
const result = correctfn("This is a cap of coffee ", "cap", "cup");
console.log(result);  // Output: The quick brown fox jumps over the lazy dog.
