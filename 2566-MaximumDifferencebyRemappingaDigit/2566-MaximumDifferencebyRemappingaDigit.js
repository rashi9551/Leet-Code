    let str = num.toString()
    for (let i = 0; i < str.length; i++) {
        if (str[i] != '9') {
            first += str[i]
            break
        }
    }
    let num1 = Number(str.replaceAll(first, 9))
    let num2 = Number(str.replaceAll(str[0], 0))
    return num1 - num2
    let first = ''
var minMaxDifference = function (num) {
 */
 * @return {number}
 * @param {number} num
/**
        if(i===str.length-1)return num
};
