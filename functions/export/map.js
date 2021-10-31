/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param {Array} array Array to call callback function.
 * @param {Function} callback Function that calling for each item in the array and returns true/false. Syntax: currentValue[, index[, array]]
 * @returns {Array} Mapped array.
 * 
 * @example
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
 *
 * console.log(map(numbers, item => item * 2));
 * // => [
   2,  4,  6,  8, 10,
  12, 14, 16, 20
]
 */

export function map(array, callback) {
    const newArr = [];

    for (let i = 0; i < array.length; i += 1) {
        if (i in array) {
            newArr[i] = callback(array[i], i, array);
        }
    }

    return newArr;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 10].map(item => item * 2));