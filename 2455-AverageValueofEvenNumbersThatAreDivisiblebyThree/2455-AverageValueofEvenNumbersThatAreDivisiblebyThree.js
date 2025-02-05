    let count=0
var averageValue = function(nums) {
    let sum=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2===0 && nums[i]%3===0){
            sum+=nums[i]
 */
            count++
        }
    }
    return (sum/count)>0?Math.floor(sum/count):0
};
 * @return {number}
 * @param {number[]} nums
