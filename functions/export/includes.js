/**
 * Check if the array includes the search element and returns
 * boolean value. Correctly works with NaN using Object.is() method.
 * 
 * @param {Array} array Array for searching.
 * @param {any} searchElement Element to search.
 * @param {number} [fromIndex] The index where the search starts from.
 * @returns {boolean} Result of the search.
 * 
 * @example
 * 
 * includes(['apple', 'banana', 'pear'], 'pear')
 * // => true
 */

export function includes(array, searchElement, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex = array.length + fromIndex;
    }

    if (fromIndex % 1 !== 0) {
        fromIndex = Math.trunc(fromIndex);
    }

    for (let i = fromIndex; i < array.length; i += 1) {
        if (Object.is(array[i], searchElement)) {
            return true;
        }
    }

    return false;
}
