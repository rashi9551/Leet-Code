    let map=new Map()
var wordPattern = function(pattern, s) {
 */
 * @return {boolean}
 * @param {string} s
 * @param {string} pattern
/**
    s=s.split(" ")
    if(pattern.length!=s.length)return false
    if (new Set(pattern).size !== new Set(s).size) return false;
    for(i=0;i<s.length;i++)
    {
        if(map.has(pattern[i]))
        {
            if(map.get(pattern[i])!=s[i])
            {
                return false
            }
        }else{
        map.set(pattern[i],s[i])
"
