/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func sortedArrayToBST(nums []int) *TreeNode {
    if len(nums) < 1 {
        return nil
    }
    M := int(math.Floor(float64(len(nums)/2)))
    root := TreeNode{nums[M], nil, nil}
    root.Right = sortedArrayToBST(nums[M+1:])
    root.Left = sortedArrayToBST(nums[0:M])
    return &root
}
