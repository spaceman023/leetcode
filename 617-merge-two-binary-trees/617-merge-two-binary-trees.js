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
        if (!root1){
            root1 = new TreeNode()
        }
        if (root1 && root2){
            root1.val = root1.val + root2.val
        } else {
            root1.val = root1?.val || 0 + root2?.val || 0
        }
        root1.right = dfs(root1?.right, root2?.right)
        root1.left = dfs(root1?.left, root2?.left)
        return root1;
    }
    return dfs(root1, root2)
};