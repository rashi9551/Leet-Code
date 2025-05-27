
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    for (let i = 0; i < s.length; i++) {
    let map = new Map()
var longestPalindrome = function (s) {
 */
    }
    let useMiddle = true;
    let res = 0;
    for (let [key, val] of map) {
        if (val % 2 === 0) res += val
        else {
            if(useMiddle){
                res+=1
                useMiddle=false
            }
            res = res + (val - 1)
        }
    }
    return res
};
