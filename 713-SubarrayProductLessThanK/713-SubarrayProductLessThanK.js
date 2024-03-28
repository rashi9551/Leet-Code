        let j=i
        let power=1
    {
        while(power<k)
        {
            power*=nums[j]
            if(power<k)count++
            j++
        }
    }
    return count
};
[
