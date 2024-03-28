        //     }else{
        //         break
        //     }
        // }
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
