/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toString("").replace(/[, :.]/g, '').toLowerCase()
    console.log(s)
    let rev=s.split('').reverse().join("")
    return s===rev
"
