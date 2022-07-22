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
    if (!head){
        return null
    } else {
        if (head.next){
           let third = head.next.next
           let newhead = head.next
           newhead.next = head
           head.next = swapPairs(third)
           return newhead
        } else {
            return head
    }
}
return head
}