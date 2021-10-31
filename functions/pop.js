/**
 * Deletes the last element in the array and return deleted element
 * @param {Array} array array
 * @returns {any} deleted element
 * 
 * @example
 * 
 * const arr = [1, 2, 3, 4, 5];
 * 
 * console.log(pop(arr));
 * // => 5;
 * 
 * console.log(arr);
 * // => [1, 2, 3, 4]
 */

function pop(array) {
    const deletedItem = array[array.length - 1];

    array.length--;

    return deletedItem;

}