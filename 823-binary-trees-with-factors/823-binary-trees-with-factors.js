/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    let mod = 1000000007;
    let n = arr.length;
    arr.sort((a,b) => a-b);
    let dp = new Array(n).fill(1);
    let index = new Map();
    for (let i = 0; i < n; i++){
        index.set(arr[i], i);
    }
    for (let i = 0; i < n; i++){
        for (let j = 0; j < i; j++){
            if (arr[i] % arr[j] == 0){
                let right = arr[i] / arr[j];
                if (index.has(right)){
                    dp[i] = (dp[i] + dp[j] * dp[index.get(right)]) % mod;
                }
            }
        }
    }
    let ans = 0;
    for (let x of dp) {
        ans += x;
    }
    return ans % mod;
};