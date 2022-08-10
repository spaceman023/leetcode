/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return doWork(nums);
};


function doWork(nums){
    if (nums.length < 1){
        return null
    }
    let M = Math.floor(nums.length/2);
    let root = new TreeNode(nums[M]);
    root.left = doWork(nums.slice(0, M));
    root.right = doWork(nums.slice(M+1,nums.length))
    return root;
}