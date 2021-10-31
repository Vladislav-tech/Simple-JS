/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param {Array} array array to filter.
 * @param {Function} callback callback function calling for each item in the array. Syntax: currentValue[, index[, array]]
 * @returns {Array} filtered array.
 * 
 * @example
 * 
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
 * 
 * console.log(filter(numbers, item => item % 2 === 0));
 * // => [2, 4, 6, 8, 10]
 */
export function filter(array, callback) {
    const newArr = [];

    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) {
            console.log(i)
            newArr.push(array[i]);
        }
    }

    return newArr;
}

