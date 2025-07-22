        while (set.has(nums[i])) {
            set.delete(nums[windowFirst])
            sum -= nums[windowFirst]
            windowFirst++
        }
    for (let i = 0; i < nums.length; i++) {
    let windowFirst = 0
    let sum = 0
    let set = new Set()
    let maxSum = 0
var maximumUniqueSubarray = function (nums) {
 */
 * @return {number}
 * @param {number[]} nums
/**
