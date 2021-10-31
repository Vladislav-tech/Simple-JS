/**
 * Add elements to the the begginning of the array.
 * @param {Array} array Array to add.
 * @param  {any} elements To add to the begginning of the array.
 * @returns {number} New length of the array.
 */
export function unshift(array, ...elements) {
    let newLength = array.length + elements.length;

    for (let i = elements.length, j = 0; i < newLength; i += 1, j += 1) {
        elements[i] = array[j];
    }

    for (let i = 0; i < elements.length; i++) {
        array[i] = elements[i];
    }

    return newLength;
}