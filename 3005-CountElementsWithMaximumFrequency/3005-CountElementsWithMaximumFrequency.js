        let element = arr[i];
        if (frequency[element]) {
            frequency[element]++;
            if(count<frequency[element])count=frequency[element]
        } else {
            frequency[element] = 1;
        }
    }
    let frequency = {};
    let count=0
    for (let i = 0; i < arr.length; i++) {
 */
var maxFrequencyElements = function(arr) {
/**
 * @param {number[]} nums
 * @return {number}
    let sum=0
    if(count==0)
    {
        return arr.length
    }
    for(let key in frequency)
    {
        if(frequency[key]==count)
        {
            sum++
        }
    }
[
