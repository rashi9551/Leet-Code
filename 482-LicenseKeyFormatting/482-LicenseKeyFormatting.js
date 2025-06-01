/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    s = s.toUpperCase().split("-").join('')
    let str=''
    let count=0
    for (let i = s.length-1; i >=0; i--) {
        if(count===k){
            str+='-'
            count=0
        }
        str+=s[i]
        count++
    }
