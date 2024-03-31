    {
        sum=sum+=nums[i]
    for(let i=0;i<nums.length;i++)
    let minLen=Infinity
var minSubArrayLen = function(target, nums) {
 */
 * @return {number}
 * @param {number[]} nums
/**
 * @param {number} target
    let sum=0
    let start=0
        while(sum>=target)
        {
            minLen=Math.min(minLen,i-start+1)
            sum=sum-nums[start]
            start++;
        }
    }
    return minLen===Infinity?0:minLen
};
7
