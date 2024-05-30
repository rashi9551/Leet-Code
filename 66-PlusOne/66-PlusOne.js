 * @return {number[]}
 */
var plusOne = function(digits) {
    let num=digits.join("")
    num=BigInt(num)
    num++
    let res=num.toString().split("")
    return res
};
 * @param {number[]} digits
/**
[
