/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(node) {
    if (!node) return 0
        if (node?.right || node?.left){
            return 1 + Math.max(maxDepth(node?.right || 0), maxDepth(node?.left || 0))
        } else {
            return 1
        }
    return maxDepth(node)
};