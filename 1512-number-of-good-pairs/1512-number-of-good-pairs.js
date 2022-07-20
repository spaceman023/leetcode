/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let seen = new Map();
    let pairs = 0;
    nums.forEach(el => {
      if (seen.has(el)){
        let curr = seen.get(el)
        pairs+=curr
        seen.set(el, curr+1);
      } else {
        seen.set(el, 1)
      }
    })
    return pairs
    
};