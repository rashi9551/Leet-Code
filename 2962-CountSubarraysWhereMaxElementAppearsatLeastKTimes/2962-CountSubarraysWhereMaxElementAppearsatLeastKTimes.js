 * @return {number}
 * @param {number} k
 * @param {number[]} nums
/**
 */
var countSubarrays = function (nums, k) {
    let count = 0
    let maxCount=0,start=0
    let max=Math.max(...nums)
    for (i = 0; i < nums.length; i++) {
        if(nums[i]===max)
        {
            maxCount++
        }
        while(maxCount==k)
        {
            count+=nums.length-i
            if(nums[start]===max)maxCount--;
            start++
        }
    }
    return count
};
[
