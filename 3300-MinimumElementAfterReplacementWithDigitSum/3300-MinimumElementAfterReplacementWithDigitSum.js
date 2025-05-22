        let n=nums[i]
        while(n>0){
            let ans=n%10
            n=(n-ans)/10
        }
        let sum=0
            sum+=ans
        nums[i]=sum
    }
    for(let i = 0 ; i < nums.length ; i++){
    return nums.sort((a,b)=>a-b)[0]
var minElement = function(nums) {
 */
 * @return {number}
