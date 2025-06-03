/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    n = n.split('').map(Number)
    return Math.max(...n)
};
