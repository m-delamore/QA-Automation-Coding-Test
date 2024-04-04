function sortNumbers(arr) {
    // Check if the input array contains exactly 10 elements
    if (arr.length !== 10) {
        throw new Error("Input array must contain exactly 10 elements.");
    }
    
    // Check if all elements are unique
    let unique = new Set(arr);
    if (unique.size !== 10) {
        throw new Error("Input array must contain 10 different numbers.");
    }
    
    // Check if all elements are between 0 and 100
    for (let num of arr) {
        if (num < 0 || num > 100) {
            throw new Error("All numbers in the array must be between 0 and 100.");
        }
    }
    
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Return the sorted array
    return arr;
}

// Example usage:
const numbers = [56, 23, 78, 45, 12, 89, 34, 67, 90, 1];
console.log(sortNumbers(numbers)); // Output will be sorted array

// CREATE A RANDOMIZER - RNG for numbers