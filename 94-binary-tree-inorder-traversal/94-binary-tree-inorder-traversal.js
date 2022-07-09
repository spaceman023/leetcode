var inorderTraversal = function(node, vals = []) {
        if (!node) return []
        inorderTraversal(node.left, vals);
        vals.push(node.val);
        inorderTraversal(node.right, vals);
        return vals || []
};