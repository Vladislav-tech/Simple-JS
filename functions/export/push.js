/**
 * Add the elements in the end of given array and returns its new length.
 * @param {Array} array Array to add elements.
 * @param  {any} elements To add in the end of array.
 * @returns {number} New length.
 * 
 * @example
 * 
 * const fruits = ['apple', 'banana', 'pear'];
 * 
 * console.log(push(fruits, 'grape', 'kiwi'));
 * // => 5
 * 
 * console.log(fruits);
 * // => ['apple', 'banana', 'pear', 'grape', 'kiwi']
 */

export function push(array, ...elements) {
    const newLength = elements.length + array.length;

    for (let i = array.length, j = 0; i < newLength; i += 1, j += 1) {
        array[i] = elements[j];
    }

    return newLength;
}