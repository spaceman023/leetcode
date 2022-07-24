/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
package main

func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	head := &ListNode{
		Val:  0,
		Next: nil,
	}
	nodeA := l1
	nodeB := l2
	curr := head
	if nodeB == nil && nodeA == nil {
		return nil
	}
	if nodeB == nil {
		return nodeA
	}
	if nodeA == nil {
		return nodeB
	}

	for curr.Next == nil {
		blanknode := &ListNode{
			Val:  0,
			Next: nil,
		}

		if nodeA.Next != nil && nodeB.Next == nil {
			if nodeA.Val <= nodeB.Val {
				curr.Val = nodeA.Val
				nodeA = nodeA.Next
				curr.Next = blanknode
				curr = curr.Next
			} else {
				curr.Val = nodeB.Val
				curr.Next = nodeA
			}
		}
		if nodeA.Next == nil && nodeB.Next != nil {
			if nodeA.Val <= nodeB.Val {
				curr.Val = nodeA.Val
				curr.Next = nodeB
			} else {
				curr.Val = nodeB.Val
				nodeB = nodeB.Next
				curr.Next = blanknode
				curr = curr.Next
			}
		}
		if nodeA.Next == nil && nodeB.Next == nil {
			if nodeA.Val <= nodeB.Val {
				curr.Val = nodeA.Val
				curr.Next = nodeB
			} else {
				curr.Val = nodeB.Val
				curr.Next = nodeA
			}
		}
		if nodeA.Next != nil && nodeB.Next != nil {
			if nodeA.Val <= nodeB.Val {
				curr.Val = nodeA.Val
				nodeA = nodeA.Next
				curr.Next = blanknode
				curr = curr.Next
			} else {
				curr.Val = nodeB.Val
				nodeB = nodeB.Next
				curr.Next = blanknode
				curr = curr.Next
			}
		}
	}
	return head
}
