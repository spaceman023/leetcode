/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i+=2){
        let f = nums[i];
        let v = nums[i+1];
        arr = arr.concat(new Array(f).fill(v));
    }
    return arr
};