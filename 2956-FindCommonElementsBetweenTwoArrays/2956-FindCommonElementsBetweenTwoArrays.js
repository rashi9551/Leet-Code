/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let count1=0
    let count2=0
    for(i=0;i<Math.max(nums1.length,nums2.length);i
++)
    {
        if(nums1.includes(nums2[i]))count1++
        if(nums2.includes(nums1[i]))count2++
    }
    return [count2,count1]
};
[4,3,2,3,1]
