function countWords(paragraph) {
    
    const words = paragraph.trim().split(/\s+/);
    
    
    return words.length > 0 ? words.length : 0; 
}


const paragraph = "This is an example paragraph with several words.";
const wordCount = countWords(paragraph);
console.log(wordCount);  
