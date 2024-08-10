 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let obj={}
    for(let value of nums){
        obj[value]=1
    }
    let res=[]
    for(let i=1;i<=nums.length;i++){
        if(!obj[i])res.push(i)
    }
    return res
};
/**
[4,3,2,7,8,2,3,1]
[1,1]
{ '1': 1, '2': 1, '3': 1, '4': 1, '7': 1, '8': 1 }

{ '1': 1 }

[5,6]
[2]
[5,6]
[2]
[
