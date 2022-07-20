/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let seen = new Map();
    let pairs = 0;
    for (let i = 0; i < nums.length; i++){
      if (seen.has(nums[i])){
        let curr = seen.get(nums[i])
        pairs+=curr
        seen.set(nums[i], curr+1);
      } else {
        seen.set(nums[i], 1)
      }
    }
    return pairs
    
};