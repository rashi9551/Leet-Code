/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {

    return (k / 2) * (2 * Math.max(...nums) + (k - 1));
};
