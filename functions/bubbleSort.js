/**
 * Sorts the array using bubble sort O(n²).
 * Mutates the original array.
 * Do not recommend use this algorightm in the projects apart from educational ones.
 * @param {Array} array Array to sort. 
 * @returns {Array} Ascending sorted array.
 * 
 * @example
 * 
 * const arr = [5, 3, 1, 9, 0];
 * 
 * console.log(bubbleSort(arr));
 * // => [0, 1, 3, 5, 9]
 * 
 * console.log(arr);
 * // => [0, 1, 3, 5, 9]
 * 
 */

const bubbleSort = (array) => {
    let stepsCount = array.length - 1;

    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < stepsCount; i += 1) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }

            swapped = true;
        }
        stepsCount -= 1;

    } while (swapped);

    return array;
};
