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
var goodNodes = function(root) {
    function dfs(node, max){
        if (!node) return 0;
        if (node.val >= max){
            max = node.val;
            let r = dfs(node.right, max)
            let l = dfs(node.left, max)
            return r + l + 1
        } else {
            let r = dfs(node.right, max)
            let l = dfs(node.left, max)
            return r + l + 0
        }
    }
    return dfs(root, root.val);
};