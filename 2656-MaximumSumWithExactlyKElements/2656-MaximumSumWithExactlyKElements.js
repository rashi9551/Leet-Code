 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let max = Math.max(...nums)-1
    let sumOfMax=(max*(max+1)/2)
    max=max+k
    let sumOfMaxK=(max*(max+1)/2)
    console.log(sumOfMaxK,sumOfMax)
    return sumOfMaxK-sumOfMax
};
 * @param {number[]} nums
