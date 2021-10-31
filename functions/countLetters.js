/**
 * Create an object that includes count of all letters in the given string.
 * Does not counts spaces.
 * @param {string} string String to count letters.
 * @returns {Object} Object with values of letters.
 * 
 * @example
 * 
 * const string = 'Hello wonderful world!';
 * 
 * console.log(countLetters(string));
 * // => { H: 1, e: 2, l: 4, o: 3, w: 2, n: 1, d: 2, r: 2, f: 1, u: 1, '!': 1 }
 */

function countLetters(string) {
    const chars = {};

    for (const char of string) {
        if (char === ' ') continue;
        chars[char] = 1 + (chars[char] || 0);
    }

    return chars;
}
