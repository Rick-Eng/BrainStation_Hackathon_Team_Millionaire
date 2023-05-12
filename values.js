// Store the values of each question
const questionValues = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000];

// Variable to keep track of the total sum
let totalSum = 0;

// Function to add the value of a question to the total sum
function addQuestionValue(value) {
  totalSum += value;
}

// Example usage:
addQuestionValue(200); // Add the value of the first question
addQuestionValue(500); // Add the value of the second question

// Display the total sum at the end
console.log('Total Sum:', totalSum);
