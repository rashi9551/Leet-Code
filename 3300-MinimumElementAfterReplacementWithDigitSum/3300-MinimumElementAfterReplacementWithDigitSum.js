        while(n>0){
            let ans=n%10
            n=(n-ans)/10
        let sum=0
            sum+=ans
        }
        if(sum<small)small=sum
    }
    return small
};
