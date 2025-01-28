 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let isFirstZero = true
    let j = -1

    for (let i = 0; i < nums.length; i++) {
        if (isFirstZero && nums[i] === 0) {
            j = i
            isFirstZero = false
        }
        if (j >= 0 && nums[i] != 0) {
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
            j++
        }
    }
};
 * @param {number[]} nums
