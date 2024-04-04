function sumNumbers(num1, num2) {
    // Check if both numbers are between 0 and 100
    if (num1 < 0 || num1 > 100 || num2 < 0 || num2 > 100) {
        throw new Error("Both numbers must be between 0 and 100.");
    }
    
    // Calculate the sum of the two numbers
    const sum = num1 + num2;
    
    // Return the sum
    return sum;
}

// Example usage:
const number1 = 34;
const number2 = 67;
console.log(sumNumbers(number1, number2)); // Output will be the sum of the two numbers