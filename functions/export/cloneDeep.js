/**
 * Recursively clones the given object and returns a deep copy of the object.
 * @param {Object} object Object to copy
 * @returns {Object} Returns the deep clone of the given object
 * 
 * @example
 * 
 * const object_1 = {
 *   a: 1,
 *   b: 2,
 *   c: {
 *       d: {
 *           e: 4,
 *       },
 *   },
 * };
 *
 * const object_2 = cloneDeep(object_1);
 *
 * console.log(object_1 === object_2)
 * // => false
 *
 * console.log(object_1.c.d === object_2.c.d);
 * // => false
 * 
 */

export function cloneDeep(object) {
    const newObject = {};

    for (const [key, value] of Object.entries(object)) {
        newObject[key] = typeof value === 'object' ? cloneDeep(value) : value;
    }

    return newObject;
}
