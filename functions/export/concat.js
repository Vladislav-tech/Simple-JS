/**
 * Makes the new array from others arrays.
 * @param {Array} array The array to concatenate.
 * @param  {any} [items] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * 
 * @example
 * 
 * const array_1 = [1, 2, 3];
 * const array_2 = concat(array_1, 4, 5, 6, [7, 8, [9]])
 * 
 * console.log(array_2);
 * // => [1, 2, 3, 4, 5, 6, 7, 8, [9]]
 * 
 * console.log(array_1);
 * // => [1, 2, 3]
 */

export function concat(array, ...items) {
    const newArr = [];

    for (let i = 0; i < array.length; i += 1) {
        newArr[i] = array[i];
    }

    for (let i = 0, j = newArr.length; i < items.length; i += 1, j += 1) {
        if (items[i].constructor === Array) {
            for (let k = 0; k < items[i].length; k += 1) {
                newArr[j] = items[i][k];
                if (k !== items[i].length - 1) {
                    j++;
                }
            }
        } else {
            newArr[j] = items[i];
        }
    }

    return newArr;
}
