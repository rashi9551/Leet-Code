/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let map = new Map()
    for(num of arr){
        if(map.get(2*num) || map.get(num/2)){
    }
            return true
        }else{
            map.set(num,true)
        }
    return false
};
