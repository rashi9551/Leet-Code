 */
var integerReplacement = function(n) {
    let count =0;

 * @return {number}
    while(n>1){
        if(n%2===0){
            n=n/2
        }else {
            if(((n-1)/2) %2===0 || n===3){
                n=n-1
            }else{
                n=n+1
            }
        }
        count++
    }
    return count
};
