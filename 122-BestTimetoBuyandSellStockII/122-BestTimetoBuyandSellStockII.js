 */
var maxProfit = function(prices) {
    let profit=0
    for(let i=0 ;i<prices.length;i++){
        if(prices[i]<prices[i+1]){
            profit-=prices[i]
        }
    }
            profit+=prices[i+1]
    return profit
};
 * @return {number}
 * @param {number[]} prices
/**
