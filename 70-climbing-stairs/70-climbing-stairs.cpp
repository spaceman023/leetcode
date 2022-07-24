#include <vector>
class Solution {
public:
  int climbStairs(int n) {
    if (n == 1) {
      return 1;
    }
    std::vector<int> dp = {(n + 1), 1, 2};
    for (int i = 3; i <= n; ++i) {
       dp.push_back(dp[i - 1] + dp[i - 2]);
    }
    return dp[n];
  }
};
