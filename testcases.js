const assert = require('assert');
const { sortNumbers, sumNumbers } = require('./yourFunctionsFile.js'); // Replace 'yourFunctionsFile.js' with the file where your functions are defined

describe('sortNumbers', function() {
    it('should sort an array of 10 numbers in ascending order', function() {
        const input = [56, 23, 78, 45, 12, 89, 34, 67, 90, 1];
        const expectedOutput = [1, 12, 23, 34, 45, 56, 67, 78, 89, 90];
        assert.deepEqual(sortNumbers(input), expectedOutput);
    });
    // if the numbers are all the same - 0

    // more than 10
    // less than 10
    it('should throw an error if the input array does not contain exactly 10 elements', function() {
        const input = [1, 2, 3, 4, 5];
        assert.throws(() => sortNumbers(input), Error);
    });

    it('should throw an error if the input array contains duplicate elements', function() {
        const input = [1, 2, 3, 4, 5, 1, 6, 7, 8, 9];
        assert.throws(() => sortNumbers(input), Error);
    });

    // separate test cases - one for negative, another for over limit
    it('should throw an error if the input array contains elements not between 0 and 100', function() {
        const input = [101, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        assert.throws(() => sortNumbers(input), Error);
    });

    // type - string and float
    // not an array object
    
});

describe('sumNumbers', function() {
    it('should return the sum of two numbers between 0 and 100', function() {
        const num1 = 34;
        const num2 = 67;
        const expectedSum = num1 + num2;
        assert.strictEqual(sumNumbers(num1, num2), expectedSum);
    });

    it('should throw an error if either number is not between 0 and 100', function() {
        const num1 = 101;
        const num2 = 67;
        assert.throws(() => sumNumbers(num1, num2), Error);
    });
});