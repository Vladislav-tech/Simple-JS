/**
 * Returns sum of all number items in the given array using recursion. 
 * Works with any array nesting. Does not calculates not number types.
 * @param {Array} array Array to sum items 
 * @returns {number} Sum of all items in the given array.
 * 
 * @example
 * 
 * const arr_1 = [1, 2, 3];
 * 
 * console.log(arraySum(arr_1));
 * 
 * // => 6
 * 
 * const arr_2 = ['hello', true, null, [10, [-5, 4]]];
 * 
 * console.log(arraySum(arr_2));
 * 
 * // => 9
 */

export function arraySum(array) {
    let sum = 0;

    for (const item of array) {
        if (Array.isArray(item)) {
            sum += arraySum(item);
        }

        if (typeof item === 'number') {
            sum += item;
        }
    }

    return sum;
}
