/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = [];
    
    let rt = 1;
    
    for (let i = 0; i < nums.length; i++) {
        res[i] = rt;
        rt *= nums[i];
    }
    rt = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] *= rt;
        rt *= nums[j];
    }
    
    return res;
    
};