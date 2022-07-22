/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    //console.log(head.val)
    if (!head || !head.next){
        return head
    } else {
           let third = head.next.next
           let newhead = head.next
           newhead.next = head
           head.next = swapPairs(third)
           return newhead
    }}