/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    function dfs(root1, root2) {
        if (!root1 && !root2){
            return null
        }
        let newRoot = new TreeNode()
        if (root1 && root2){
            newRoot.val = root1.val + root2.val
        } else {
            newRoot.val = root1?.val || 0 + root2?.val || 0
        }
        newRoot.right = dfs(root1?.right, root2?.right)
        newRoot.left = dfs(root1?.left, root2?.left)
        return newRoot;
    }
    return dfs(root1, root2)
};