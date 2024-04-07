var findBottomLeftValue = function(root) {
    let queue=[]
    queue.push(root);
    if(!root.left&&!root.right)return root.val
    while(queue.length)
    {
        let curr=queue.shift()
        if(curr.right)queue.push(curr.right)
        if(curr.left)queue.push(curr.left)
        if(queue.length===1 && (!queue[0].left&&!queue[0].right))
        {
            return queue[0].val
        }
    }
};
[
