        size++
        tail = tail.Next
    }

    k = k % size

    if k == 0 {
        return head
[
