/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    const check = (node) => {
        if (!node) return null
        if (node.val == target.val){
            return node
        } else {
            return check(node.right) || check(node.left)
        }
    }
    return check(cloned)
};