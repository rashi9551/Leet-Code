        }
        if (nums[mid] < target) {
            return mid
        if (nums[mid] >= target && nums[mid - 1] < target) {
        }
            return mid
            return search(s + 1, e)
        } else {
            return search(s, e - 1)
        }
    }
    return search(0, nums.length - 1)
        if (s >= e) {
};
        let mid = Math.floor((s + e) / 2)
    function search(s, e) {
