/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1){
      return 1
    }
    let dp = [n+1, 1, 2]
    for (let i = 3; i <= n; i++){
      dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n]
};