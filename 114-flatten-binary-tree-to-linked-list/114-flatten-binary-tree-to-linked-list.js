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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let q = [];
    function traverse(node) {
        q.push(node);
        if (node){
        if (node.left) {
            traverse(node.left);
        }
        if (node.right) {
            traverse(node.right);
        }
        }
    }
    traverse(root);
    for (let i = 0; i < q.length-1; i++){
        let n = q[i];
        n.left = null;
        n.right = q[i+1];
    }
    return q[0];
};