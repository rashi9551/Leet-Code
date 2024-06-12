 */
 * @return {number}
var numberOfPairs = function(nums1, nums2, k) {
    let count =0
    for(i=0;i<nums1.length;i++)
    {
 * @param {number} k
        for(j=0;j<nums2.length;j++)
        {
            if(nums1[i]%(nums2[j]*k)===0)
            {
                count++
            }
        }
    }
    return count
};
 * @param {number[]} nums2
 * @param {number[]} nums1
/**
[
