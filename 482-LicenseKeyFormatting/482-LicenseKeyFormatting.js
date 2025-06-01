/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    s = s.toUpperCase().replaceAll("-",'').split('')
    for(let i= s.length-k ; i>0 ; i-=k)
    {
