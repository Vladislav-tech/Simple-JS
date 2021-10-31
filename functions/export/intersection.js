/**
 * Creates an array of unique values that are includes in two
 * given arrays.
 * @param {Array} array_1 First array.
 * @param {Array} array_2 Second array.
 * @returns {Array} Returns the new array of intersecting values.
 * 
 * @example
 * 
 * console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
 * // => [3, 4]
 */

export function intersection(array_1, array_2) {
    return array_1.filter(item => array_2.includes(item));
}
