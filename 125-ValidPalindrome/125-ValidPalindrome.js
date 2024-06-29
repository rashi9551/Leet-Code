 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toString("").replace(/[^a-zA-Zs\d+]/g, '').toLowerCase()
    let rev=s.split('').reverse().join("")
    return s===rev
};
"
