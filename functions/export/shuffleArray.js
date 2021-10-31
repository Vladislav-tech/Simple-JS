/**
 * Shuffles the given array and returns it.
 * Uses Fisher-Yates (aka Knuth) Shuffle.
 * Mutates the original array.
 * 
 * For mor details: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * 
 * @example
 * 
 * const array = [0, 1, 2, 3, 4, 5];
 * 
 * console.log(shuffleArray(array));
 * // => [
  3, 8, 6, 2, 5,
  1, 7, 0, 4, 9
]
 * 
 * @param {Array} array Array to shuffle.
 * @returns {Array} Shuffled array
 */

export function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
