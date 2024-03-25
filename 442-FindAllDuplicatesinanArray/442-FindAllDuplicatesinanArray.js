 */
 * @return {number[]}
 * @param {number[]} nums
var findDuplicates = function(nums) {
    let map=new Map()
    let res=[]
    for(let val of nums)
    {
        if(map.has(val))
        {
            res.push(val)
        }else{
            map.set(val,true)
        }
    }
    return res
};
[
