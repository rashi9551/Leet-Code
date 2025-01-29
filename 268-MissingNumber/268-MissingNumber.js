/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sumOfNaturalNum=nums.length*(nums.length+1)/2
    let sumOfTheNums=nums.reduce((acc,curr)=>acc+curr)
    return sumOfNaturalNum-sumOfTheNums
};
