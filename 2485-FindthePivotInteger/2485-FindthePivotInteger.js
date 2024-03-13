 * @return {number}
 */
var pivotInteger = function(n) {
    if(n==1)return 1
    let lSum=1
    let rSum=n
    let j=n
    let i=1
    while(i!=j){
        if(lSum<rSum){
            i++
            lSum+=i
        }
        else{
            j--
            rSum+=j
        }
    }
    lSum+=i
    rSum+=j
8
