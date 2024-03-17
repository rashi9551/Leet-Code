/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let res=0
    let dMax=0
    for(let [a,b] of dimensions)
    {
        const d=(a*a)+(b*b)
        if(d>dMax || (d===dMax && a*b>res))
        {
            res=a*b
            dMax=Math.max(dMax,d)

        }
    }
    return res
    
};
[
