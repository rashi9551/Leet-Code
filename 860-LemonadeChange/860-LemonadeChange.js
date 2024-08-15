       }
            }
       else if(bills[i]===20){
            if(five && ten){
                ten-=1
                five-=1
            }else if(five>=3){
                five-=3
            }else{
                return false
            }
       }
    }
    return true
};
[5,5,5,10,20]
[5,5,10,10,20]
[5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]
[5,5,5,10,5,5,10,20,20,20]
true
false
true
false
true
false
true
false
[
