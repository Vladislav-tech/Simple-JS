/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the 
 * final chunk will be the remaining elements.
 * @param {Array} array The array to chunk.
 * @param {number} [size = 1]  The length of each chunk. 
 * @returns {Array} Returns the new chunked array.
 * 
 * @example
 * 
 * console.log(chunk(['a', 'b', 'c', 'd'], 2));
 * 
 * // => [ [ 'a', 'b' ], [ 'c', 'd' ] ]
 * 
 * console.log(chunk(['a', 'b', 'c', 'd'], 3));
 * 
 * // => [ [ 'a', 'b', 'c' ], [ 'd' ] ]
 */

function chunk(array, size = 1) {
    const newArr = [];

   for (let i = 0, j = 0; i < array.length; i += size, j += 1) {
       newArr[j] = array.slice(i, i + size);
   }

   return newArr;
}

console.log(chunk(['a', 'b', 'c', 'd'], 3));