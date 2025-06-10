    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    let a1 = -Infinity
    let a2 = Infinity
    for (let [str, freq] of map) {
        if (freq % 2 === 0) {
            a2 = Math.min(a2, freq)
        } else {
            a1 = Math.max(a1, freq)
        }
    }
    let map = new Map()
var maxDifference = function (s) {
 */
 * @return {number}
 * @param {string} s
