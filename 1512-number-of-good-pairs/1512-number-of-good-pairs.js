/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let seen = new Map();
    let pairs = 0;
    for (let i = 0; i < nums.length; i++){
      if (seen.has(nums[i])){
        pairs+=seen.get(nums[i]);
        seen.set(nums[i], seen.get(nums[i])+1);
      } else {
        seen.set(nums[i], 1)
      }
    }
    return pairs
    
};