
// This function is to generate 10 random unique numbers.
function generateTenNumbers(){
    let randomNumberArray = [];

    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 101); // To include 100
        randomNumberArray.push(randomNumber);
    }

    return randomNumberArray;
}

function sortNumbers(arrayObj) {
    // Have to first ensure that there are only 10 items in the array.
    if (arrayObj.length !== 10) {
        throw new Error("Array must contain exactly 10 items only.");
    }

    // I used the Set() method to determine if the number of unique items are equal to 10.
    // Placing the check to ensure there are 10 items only before this will ensure the unique items are counted correctly.
    let unique = new Set(arrayObj);
    if (unique.size !== 10) {
        throw new Error("Items in array must contain 10 different numbers.");
    }

    // Ensure all items are number data type.
    for (let num of arrayObj) {
        if (typeof num !== 'number') {
            throw new Error("There is one or more items in the array that are not numbers.");
        }
    }

    // Ensure all items are numbers between 0 and 100. This will include ones with floating points.
    for (let num of arrayObj) {
        if (num < 0 || num > 100) {
            throw new Error("All numbers in the array must be between 0 and 100.");
        }
    }
    
    // Arranging the numbers using sort method with the comparison callback function.
    arrayObj.sort((a, b) => a - b);
    
    // Return the sorted array
    return arrayObj;
}

function sumNumbers(num1, num2) {
    // Ensure both arguments are of 'number' data type.
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error("One of the inputs are not numbers.");
    }
    
    // Ensure both numbers are between 0 and 100
    if (num1 < 0 || num1 > 100 || num2 < 0 || num2 > 100) {
        throw new Error("Both numbers must be between 0 and 100.");
    }
    
    // Calculate the sum of the two numbers
    const sum = num1 + num2;
    
    // Return the sum
    return sum;
}

module.exports = {
    sortNumbers: sortNumbers,
    sumNumbers: sumNumbers
};
