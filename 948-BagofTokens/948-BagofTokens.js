        if(s>=1 && power <tokens[i]){
            console.log(tokens[j])
            power+=tokens[j]
            s--
            j--
            flag=true
        }
        flag=false
        if(!flag)break
    for(let i=0,j=tokens.length-1;i<=j;){
    let s=0;
    let flag=true
    tokens=tokens.sort((a,b)=>(a-b))
var bagOfTokensScore = function(tokens, power) {
 */
 * @return {number}
[
