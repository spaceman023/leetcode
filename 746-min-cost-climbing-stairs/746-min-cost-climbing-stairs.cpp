#include <vector>
class Solution {
 public:
  int minCostClimbingStairs(std::vector<int> &cost) {
    std::vector<int> minimumCost = {0, 0};
    for (int i = 2; i < cost.size() + 1; ++i) {
      int takeOne = minimumCost[i - 1] + cost[i - 1];
      int takeTwo = minimumCost[i - 2] + cost[i - 2];
      minimumCost.push_back(std::min(takeOne, takeTwo));
    }
    return minimumCost.back();
  }
};
