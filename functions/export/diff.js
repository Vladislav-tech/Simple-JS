/**
 * Creates an array of array values not included in the other 
 * given arrays.
 * @param {Array} array_1 First array.
 * @param {Array} array_2 Second array.
 * @returns {Array}  Returns the new array of filtered values.
 * 
 * @example
 * 
 * console.log(diff([1, 2, 3], [3, 4, 5]));
 * // => [1, 2]
 */

export function diff(array_1, array_2) {
    return array_1.filter(item => !array_2.includes(item));
}

