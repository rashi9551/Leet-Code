    for (let i = 0; i < s.length; i++) {

    let orderedString = "";
    let map = new Map();
    let letters = new Set(order);
var customSortString = function(order, s) {
 */
 * @return {string}
        if (letters.has(s[i])) {
            map.set(s[i], (map.get(s[i]) || "") + s[i]);
        } else {
            orderedString += s[i];
        }
    }
    
    for (let letter of letters) {
        orderedString += (map.get(letter) || "");
    }

    return orderedString;

};
"
