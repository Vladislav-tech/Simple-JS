/**
 * Deletes the first item to the beginning of the array.
 * @param {Array} array Array to delete the first item.
 * @returns {any} Deleted item to the beginning of the array.
 * 
 * @example
 * 
 * const arr = [true, false, 0, 5];
 * 
 * console.log(shift(arr));
 * // => true
 * 
 * console.log(arr);
 * // => [false, 0, 5]
 */

function shift(array) {
    const deletedItem = array[0];

    for (let i = 1, j = 0; i < array.length; i += 1, j += 1) {
        array[j] = array[i];
    }

    array.length--;

    return deletedItem;
}
