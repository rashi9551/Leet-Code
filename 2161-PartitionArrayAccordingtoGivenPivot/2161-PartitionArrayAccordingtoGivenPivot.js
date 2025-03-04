/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let left = [], middle = [], right = [];
    for (num of nums) {
        if (num < pivot) left.push(num)
        else if (num == pivot) middle.push(num)
        else if (num > pivot) right.push(num)
    }
    return [...left, ...middle, ...right]
