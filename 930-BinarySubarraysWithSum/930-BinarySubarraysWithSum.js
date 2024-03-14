/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    
    for (let num of nums) {
        map.set(sum, (map.get(sum) || 0) + 1);
        sum += num;
        count += map.get(sum - goal) || 0;
    }
    
    return count;
};
[
