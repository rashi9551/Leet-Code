/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow=head
    let fast=head
    while(fast.next&&fast.next.next)
    {
        slow=slow.next
        fast=fast.next.next
    }
    if(fast.next)
    {
        slow=slow.next
        
        
    }
    head=slow
    return head
};
[
