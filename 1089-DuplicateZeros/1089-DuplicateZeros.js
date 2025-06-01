/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n=arr.length
    for(let i=0 ; i<=n ; i++){
        if(arr[i]===0){
            arr.splice(i,0,0)
            i++
        }
    }
    console.log(arr)
            arr.pop()
};
