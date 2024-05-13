 * @param {string} s
 * @param {string} goal
/**
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length===goal.length)
    {
        const str=s+s
        let j=0
        let k=goal.length
        for(let i=0;i<goal.length;i++)
        {
            const subs=str.substring(j,k)
            if(subs===goal)return true
            j++
            k++
        }

    }else{
        return false
    }
    return false
};
"
