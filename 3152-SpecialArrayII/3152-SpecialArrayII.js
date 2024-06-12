        if(nums[i] % 2 === nums[i - 1] % 2) arr[i] = 1;
        else arr[i] = arr[i - 1] + 1;
    }
    let l, r;
    for(let i = 0; i < queries.length; i++) {
        l = queries[i][0];
        r = queries[i][1];
        if((r - l) === (arr[r] - arr[l])) {
            ans.push(true);
        }
    for(let i = 1; i < nums.length; i++) {
    arr[0] = 1;
        else ans.push(false);
    }
    return ans;
};
[
