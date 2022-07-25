class Solution {
public:
  int rob(std::vector<int>& nums) {
  if (nums.size() < 2){
      return nums[0];
  }
  return std::max(robhelp(nums, 0, nums.size() - 2),
                    robhelp(nums, 1, nums.size()-1));
  }

  int robhelp(std::vector<int>& nums, int start, int end) {
    int rob1 = 0;
    int rob2 = 0;
    for (int i = start; i <= end; ++i) {
      int temp = std::max(nums[i] + rob1, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }


};