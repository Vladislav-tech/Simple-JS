/**
 * Returns the distance between two points in 3D.
 * @param {Array<number>} point_1 The first point.
 * @param {Array<number>} point_2 The second point.
 * @returns {number} Distance.
 *
 * @example
 *
 * console.log(getDistance3D([0, -3, 3], [3, 1, 3]));
 * // => 5
 */
function getDistance3D([x1, y1, z1], [x2, y2, z2]) {
    const xs = x2 - x1;
    const ys = y2 - y1;
    const zs = z2 - z1;

    return Math.sqrt(xs ** 2 + ys ** 2 + zs **2 );
}

console.log(getDistance3D([5, 0, 6], [0, 1, 8]));