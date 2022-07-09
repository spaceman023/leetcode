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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const order = (node, vals) => {
        if (!node) return;
        order(node.left, vals);
        vals.push(node.val);
        order(node.right, vals);
    }
    let vals = [];
    order(root, vals)
    let ans = new TreeNode(0)
    let cur = ans
    for (let i of vals) {
        cur.right = new TreeNode(i)
        cur = cur.right;
    }
    return ans.right
    
};