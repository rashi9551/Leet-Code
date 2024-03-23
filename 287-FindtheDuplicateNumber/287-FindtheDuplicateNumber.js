/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj = {};
    for (let item of nums) {
        if (obj[item]) {
            return item
        }
        obj[item] = true;
    }
};
[
