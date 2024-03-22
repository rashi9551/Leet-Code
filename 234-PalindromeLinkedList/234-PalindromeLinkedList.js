let fast=head
let prev=null
while(fast&&fast.next)
{
    fast=fast.next.next
    let next=slow.next
    slow.next=prev
    prev=slow
    slow=next
}
if(fast){
    slow=slow.next
}

while(prev){
    if(slow.val!==prev.val)return false
    slow=slow.next
    prev=prev.next
}
return true;
};
[
