/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
    res = [...map.entries()].sort((a, b) => b[1] - a[1])
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    return res[0][0]
    }

};
