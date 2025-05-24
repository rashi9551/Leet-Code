/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    let res=[]
    for(let i=1 ; i<=nums.length ;i++){
        let preArr=nums.slice(0,i)
        let suffArr=nums.slice(i,nums.length)
        let preCount=[...new Set(preArr)].length
        let suffArrCount=[...new Set(suffArr)].length
