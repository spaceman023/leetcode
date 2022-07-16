/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let freqmap = new Map();
  for (let n of nums){
    if (freqmap.has(n)){
      freqmap.set(n, freqmap.get(n)+1)
    } else {
      freqmap.set(n, 1)
    }
  }
  return Array.from(freqmap).sort((a,b) => b[1] - a[1]).map(i => i[0]).slice(0, k)
};