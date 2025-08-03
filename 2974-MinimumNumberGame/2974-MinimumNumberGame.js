/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let arr = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i += 2) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
    return arr
};
