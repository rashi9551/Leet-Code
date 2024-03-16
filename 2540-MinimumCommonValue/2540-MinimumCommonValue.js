/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let j=0,i=0
    while(nums1.length>i && nums2.length>j )
    {
        if(nums1[i]===nums2[j])return nums1[i]

        if(nums1[i]<nums2[j]){
            i++
[1,2,3]
