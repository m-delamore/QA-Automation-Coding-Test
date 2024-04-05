const assert = require('assert');
const { sortNumbers, sumNumbers } = require('./endpoints.js');

describe('sortNumbers', function() {
    
    it('is able to arrange an array of 10 unique numbers in ascending order', function() {
        const input = [100, 18, 25, 46, 81, 73, 20, 35, 0, 28];
        const expectedOutput = [0, 18, 20, 25, 28, 35, 46, 73, 81, 100];
        assert.deepEqual(sortNumbers(input), expectedOutput);
    });

    it('throws an error if the array has more than 10 items', function() {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        assert.throws(() => sortNumbers(input), Error);
    });

    it('throws an error if the array has less than 10 items', function() {
        const input = [54, 72, 81, 9, 30];
        assert.throws(() => sortNumbers(input), Error);
    });

    it('throws an error if the array contains identical numbers', function() {
        const input = [1, 2, 3, 4, 5, 7, 7, 8, 9, 0];
        assert.throws(() => sortNumbers(input), Error);
    });

    it('throws an error if the array contains numbers that are more than 100', function() {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 101];
        assert.throws(() => sortNumbers(input), Error);
    });

    it('throws an error if the array contains numbers that are negative', function() {
        const input = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
        assert.throws(() => sortNumbers(input), Error);
    });

    it('throws an error if the array contains strings', function() {
        const input = ["hello", 0, 1, 2, 3, 4, 5, 6, 7, 8.9];
        assert.throws(() => sortNumbers(input), Error);
    });

    it('throws an error if the array contains boolean', function() {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, true];
        assert.throws(() => sortNumbers(input), Error);
    });

    it('throws an error if the array contains items that are of object type', function() {
        const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, [9, 10]];
        assert.throws(() => sortNumbers(input), Error);
    });

    it('throws an error if the input is not an array object type', function() {
        const input = 0;
        assert.throws(() => sortNumbers(input), Error);
    });
});

describe('sumNumbers', function() {
    it('returns the correct sum of two numbers which are between 0 and 100', function() {
        const num1 = 37;
        const num2 = 99;
        const expectedSum = num1 + num2;
        output = sumNumbers(num1, num2);
        assert.strictEqual(output, expectedSum);
    });

    it('throws an error if either number is more than 100', function() {
        const num1 = 101;
        const num2 = 37;
        assert.throws(() => sumNumbers(num1, num2), Error);
    });

    it('throws an error if either number is negative', function() {
        const num1 = 100;
        const num2 = -37;
        assert.throws(() => sumNumbers(num1, num2), Error);
    });

    it('throws an error if either argument is a string', function() {
        const num1 = 100;
        const num2 = "hello";
        assert.throws(() => sumNumbers(num1, num2), Error);
    });

    it('throws an error if either argument is an object', function() {
        const num1 = 100;
        const num2 = [1];
        assert.throws(() => sumNumbers(num1, num2), Error);
    });

    it('throws an error if either argument is a boolean', function() {
        const num1 = 100;
        const num2 = true;
        assert.throws(() => sumNumbers(num1, num2), Error);
    });
});