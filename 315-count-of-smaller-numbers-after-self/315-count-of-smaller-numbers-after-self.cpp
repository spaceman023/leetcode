#include <ext/pb_ds/assoc_container.hpp>
using namespace __gnu_pbds;

class Solution {
public:
    vector<int> countSmaller(vector<int>& nums) {
        vector<int> ans(nums.size());
        tree<int, null_type, less_equal<int>, rb_tree_tag, tree_order_statistics_node_update> t;
        for (int i=nums.size()-1; i>=0; i--) {
            ans[i] = t.order_of_key(nums[i]);
            t.insert(nums[i]);
        }
        return ans;
    }
};