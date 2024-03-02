/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
     nums=nums.map((e)=>{
         return e*e
     })
     return nums.sort((a,b)=>(a-b))
};
[
