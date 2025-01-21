 */
var findNumbers = function(nums) {
    let EvenDigits=0;
    for(i = 0; i < nums.length ; i++){
        let digit = nums[i]
        let count=0
        while(digit>=1){
            count++
            digit=digit/10
        }
