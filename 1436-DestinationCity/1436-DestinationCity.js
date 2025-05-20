/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let obj={}
    let ans=''
    for(let i=0 ;i<paths.length;i++){
        obj[paths[i][1]]=true
    }
    for(let i=0 ;i<paths.length;i++){
        if(obj[paths[i][0]]){
            delete obj[paths[i][0]]
        }
    }
    return Object.keys(obj)[0]
