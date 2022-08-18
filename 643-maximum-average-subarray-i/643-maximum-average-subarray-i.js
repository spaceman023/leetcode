/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity
    if (nums.length <= k){
        return nums.reduce((a,b) => a+b)/nums.length
    }
    for (let i = 0; i <= nums.length-k; i++){
        let s = nums[i]
        for (let j = i+1; j < i+k; j++){
            s+=nums[j]
        }
        if (s > max){
            max = s
        }
    }
    return max/k
};