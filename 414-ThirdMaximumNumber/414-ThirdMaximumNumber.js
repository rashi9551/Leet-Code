    nums = [...new Set(nums)]
    let tm = nums[0] - 2
    let sm = nums[0] - 1
    let fm = nums[0]

    for (let val of nums) {
        if (val > fm) {
            tm = sm
            sm = fm
            fm = val
        }

    }
    if (nums.length <= 2) return Math.max(...nums)
    return tm
};
var thirdMax = function (nums) {
