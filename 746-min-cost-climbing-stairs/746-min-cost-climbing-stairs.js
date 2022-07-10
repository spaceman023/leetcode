/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minCost = new Array(cost.length+1).fill(0)
    for (let i = 2; i < minCost.length; i++){
      minCost[i] = Math.min(minCost[i-1] + cost[i-1], minCost[i-2] + cost[i-2]) 
    }
    return minCost[minCost.length-1]
};