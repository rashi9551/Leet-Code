 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr=head
    let rev=null
    while(curr){
        let next=curr.next
        curr.next=rev
        rev=curr
        curr=next
    }
    return rev
};
[
