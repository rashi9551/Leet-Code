var canBeEqual = function(target, arr) {
    console.log(target.sort())
    console.log(arr.sort())
 
   for(let i=0;i<target.length;i++){
    if(arr[i]!=target[i]){
        return false
    }
   }
 */
 * @return {boolean}
 * @param {number[]} arr
[
[1,2,3,4]
[2,4,1,3]
[7]
[7]
[3,7,9]
[3,7,11]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]

[ 7 ]
[ 7 ]

[ 3, 7, 9 ]
[ 11, 3, 7 ]

true
true
false
true
true
false
