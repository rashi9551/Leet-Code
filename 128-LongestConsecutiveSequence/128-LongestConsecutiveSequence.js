/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let count=1
    let res=0
    nums.sort((a,b)=>a-b)
    let arr=[...new Set(nums)]
    for(let i=1;i<arr.length;i++){
        if(arr[i]===arr[i-1]+1){
[
[100,4,200,1,3,2]
[0,3,7,2,5,8,4,6,0,1]
4
9
4
9
