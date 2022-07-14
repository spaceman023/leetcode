/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let output = [[]]
    for (let i = 0; i < nums.length; i++){
        output = [...output, ...output.map(j => [...j, nums[i]])]
    }
    return output
};