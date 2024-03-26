 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums=nums.sort((a,b)=>(a-b))
 let result=1
 for(i=0;i<nums.length;i++)
 {
     if(result==nums[i])
     {
         result++
         
     }
     
 }
return result
};
[
