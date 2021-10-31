/**
 * Recursively flattens the given array and returns one-dimensional array (or single dimension array).
 * @param {Array} array Array to flat.
 * @returns {Array} One-dimensional
 * 
 * @example
 * 
 * const a = [1, 2, [3, 4], 5, [[[[[6]]],],]];
 * 
 * console.log(flatten(a));
 * // => [ 1, 2, 3, 4, 5, 6 ]
 */
function flattenDeep(array) {
    const result = [];

    for (const item of array) {
        if (Array.isArray(item)) {
            const newArr = flatten(item);
            result.push(...newArr);
        }   else {
            result.push(item);

        }
    }

    return result;
}
