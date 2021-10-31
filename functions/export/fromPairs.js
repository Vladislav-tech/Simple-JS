/**
 * Create an object using values in the array.
 * @param {Array} pairs Array of arrays, including pairs. 
 * @returns {Object} Object created by the given array.
 * 
 * @example
 * 
 * const person = [['name', 'Steve'], ['age', 32], ['isAdmin', false]];
 * 
 * console.log(fromPairs(person));
 * // => { name: 'Steve', age: 32, isAdmin: false }
 */

export function fromPairs(pairs) {
    const object = {};

    for (const [key, value] of pairs) {
        object[key] = value;
    }

    return object;
}
