/**
 * Returns the distance between two points in 2D (map)
 * @param {Array<number>} point_1 The first point.
 * @param {Array<number>} point_2 The second point.
 * @returns {number} distance
 * 
 * @example
 * 
 * console.log(getDistance2D([6, 5], [6, 6]));
 * // => 1
 * console.log(getDistance2D([0, 0], [10, 0]))
 * // => 10
 */

export function getDistance2D([x1, y1], [x2, y2]) {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
}

console.log(getDistance2D([0, 0], [10, 0]))