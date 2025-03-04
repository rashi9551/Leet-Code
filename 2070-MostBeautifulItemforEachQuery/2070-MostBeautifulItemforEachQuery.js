            let mid = Math.floor((left + right) / 2)
            if (items[mid][0] <= q) {
                ans = items[mid][1]
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return ans
    })
    return res
};
        let left = 0, right = items.length - 1, ans = 0
        while (left <= right) {
    const res = queries.map(q => {
