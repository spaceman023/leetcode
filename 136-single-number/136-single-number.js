/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    for (n of nums){
        res = res ^ n
    }
    return res
};