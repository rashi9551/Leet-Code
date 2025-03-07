                prime[j] = false;
            }
        }
    }
    for(let i=left ; i<=right;i++){
    let minDiff=Infinity,res=[-1,-1]
    let prevPrime=-1
        if(prime[i]){
            if(prevPrime!=-1 && (i-prevPrime)<minDiff){
                minDiff=i-prevPrime
                res=[prevPrime,i]
            }
            prevPrime=i
        }
    }
    return res
};
