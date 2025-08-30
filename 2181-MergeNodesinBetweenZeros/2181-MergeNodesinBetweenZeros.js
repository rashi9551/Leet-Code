        if(curr.val == 0){
    while(curr){
             if(!flag){
                temp.val = sum
                if(!curr.next){
                    temp.next = null
                    break;
                }
                flag = true
             }else{
                curr.val = sum
                temp.next = curr
                temp = temp.next
             }
             sum = 0 

