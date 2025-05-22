/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let f=nums[0]
    let arr=[]
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]+1===nums[i+1])continue;
        if(f===nums[i]){
            arr.push(`${nums[i]}`)
        }else{
            arr.push(`${f}->${nums[i]}`)
        }
        f=nums[i+1]
    }
    return arr
};
