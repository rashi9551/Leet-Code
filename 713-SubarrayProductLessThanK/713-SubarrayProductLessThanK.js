var numSubarrayProductLessThanK = function(nums, k) {
    let count=0
    for(i=0;i<nums.length;i++)
    {
        let power=1
 */
 * @return {number}
 * @param {number[]} nums
 * @param {number} k
        for(j=i;power<k;j++)
        {
            power*=nums[j]
            if(power<k)count++
            else break
        }
    }
    return count
};
/**
[
