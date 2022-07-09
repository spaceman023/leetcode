/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length < 1){
        return 0
    }
    let max = 0;
    let streak = 1;
    nums = Array.from(new Set(nums.sort((a,b) => a-b)))
    for (let i = 1; i < nums.length; i++){
        if (nums[i] - nums[i-1] !== 1){
            if (streak > max){
                max = streak
            }
            streak = 1;
        } else {
            streak++
        }
    }
    return Math.max(max, streak)
};