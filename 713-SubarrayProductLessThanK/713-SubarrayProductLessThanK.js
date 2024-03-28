var numSubarrayProductLessThanK = function(nums, k) {
    let count=0
    for(i=0;i<nums.length;i++)
    {
        let power=1
        for(j=i;power<k;j++)
 */
        {
            power*=nums[j]
                count++
 * @return {number}
 * @param {number} k
 * @param {number[]} nums
            }
            if(power<k)
            {
        }
    }
    return count
};
[
