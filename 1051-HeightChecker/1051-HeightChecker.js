/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sort=[...heights].sort((a,b)=>a-b)
    let count=0
    for(let i=0;i<heights.length;i++)
    {
        if(sort[i]!=heights[i]){
            count++
        }
    }
    return count
};
[
[1,1,4,2,1,3]
[5,1,2,3,4]
[1,2,3,4,5]
3
5
0
3
5
0
