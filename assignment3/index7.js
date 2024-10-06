const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

// Use map and reduce to calculate the average scores
const output = students.map(student => {
    const total = student.scores.reduce((acc, score) => acc + score, 0);
    const average = total / student.scores.length; // Calculate average
    return { name: student.name, average: average }; // Return new object
});

console.log(output);

