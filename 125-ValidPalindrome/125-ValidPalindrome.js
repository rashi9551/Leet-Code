/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toString("").replace(/[^a-zA-Zs\d+]/g, '').toLowerCase()
    function recursion(s,i=0,j=s.length-1){
        if(s[i]!=s[j])return false
        if(i>=s.length/2)return true
        return recursion(s,i+1,j-1)
    }
    return recursion(s)

