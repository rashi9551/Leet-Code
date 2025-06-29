/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = new Map()
    for (let val of nums) {
        map.set(val, (map.get(val) || 0) + 1)
    }
    res = [...map.entries()].sort((a, b) => b[1] - a[1])
    return res[0][0]
};
