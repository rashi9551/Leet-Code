 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    let sum = [...new Set(nums)].reduce((acc, curr) => {
        return curr > -1 ? acc + curr : acc;
    }, 0)
/**
    return sum <=0  ? Math.max(...nums) :sum;
};
