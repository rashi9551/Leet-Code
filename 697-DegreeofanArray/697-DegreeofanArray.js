 * @return {number}
 */
var findShortestSubArray = function (nums) {
 * @param {number[]} nums
    let map = new Map()
/**
    let res = Infinity
    for (let value of nums) {
        map.set(value, (map.get(value) || 0) + 1)
    }
    let maxValue = Math.max(...map.values());
    for (const [key, value] of map) {
        if (value === maxValue) {
            let l = (nums.lastIndexOf(key) - nums.indexOf(key)) + 1
            res = Math.min(l, res)
        }
    }

    return res
};
