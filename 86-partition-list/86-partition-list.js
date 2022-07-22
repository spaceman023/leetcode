/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head || !head.next){
        return head
    }
    let node = head
    let lt = [];
    let gt = [];
    while(node.next){
        if (node.val >= x){
            gt.push(node)
        } else {
            lt.push(node)
        }
        node = node.next
    }
    if (node.val >= x){
            gt.push(node)
        } else {
            lt.push(node)
    }
    for (let i = 1; i < lt.length; i++){
        lt[i-1].next = lt[i]
    }
    for (let i = 1; i < gt.length; i++){
        gt[i-1].next = gt[i]
    }
    if (lt.length < 1){
        return gt[0]
    }
    if (gt.length > 0){
        lt[lt.length-1].next = gt[0]
        gt[gt.length-1].next = null;
    } else {
        lt[lt.length-1].next = null
    }
    return lt[0]
};