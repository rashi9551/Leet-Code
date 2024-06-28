var isHappy = function(n) {
    while(!seen.has(num))
    {
       let res=0;
    let num=n.toString()
    let seen=new Set()
       for(let i=0 ; i<num.length;i++){
        res+=Math.pow(parseInt(num[i]),2)
       }
       if(res===1)return true

       seen.add(num)
       num=res.toString()

    }
    return false
 */
 * @return {boolean}
 * @param {number} n
1
