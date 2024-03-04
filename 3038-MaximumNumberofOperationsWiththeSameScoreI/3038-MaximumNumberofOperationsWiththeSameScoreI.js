    let count=1
    let i=0
var maxOperations = function(nums) {
 */
 * @return {number}
 * @param {number[]} nums
/**
    if(nums.length%2==1)nums.pop()
    while(i<nums.length)
    {
        if(nums[i+1]){
        nums[i]=nums[i]+nums[i+1]
        }
        nums.splice(i+1,1)
        i++
    }
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]===nums[i+1]){count++}
        else
[
