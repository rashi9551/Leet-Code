    for(let i=0;i<nums.length;i++){
        let splitSum= nums[i].toString().split('').reduce((acc,curr)=>acc+Number(curr),0)
        if(i===splitSum){
            return i
        }
    }
    return -1
};
var smallestIndex = function(nums) {
 * @return {number}
 */
/**
 * @param {number[]} nums
