/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    const result = new Set();

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === key) {
            for (let i = Math.max(0, j - k); i <= Math.min(nums.length - 1, j + k); i++) {
                result.add(i);
            }
        }
    }

    return Array.from(result).sort((a, b) => a - b);
};
