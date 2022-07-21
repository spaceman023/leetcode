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
var deleteDuplicates = function(head) {
    if (!head){
      return head
    }
    let node = head
    while (node.next){
      if (node.next.val == node.val){
        node.next = node.next.next
        continue
      } else {
        node = node.next
      }
    }
    return head
};