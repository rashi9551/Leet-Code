        let next=curr.next
        curr.next=prev
        prev=curr
        rev(next)
    }
    rev(curr)
    let max=prev.val
    let previous=null
    head=prev
    while(prev!=null)
[
