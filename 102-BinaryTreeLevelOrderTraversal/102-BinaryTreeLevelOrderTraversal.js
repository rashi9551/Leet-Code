var levelOrder = function(root) {
    let queue=[]
 */
 * @return {number[][]}
    if(!root)return []
    let res=[]
    queue.push(root)
    while(queue.length)
    {
        let len=queue.length
        res.push([])
        for(let i=0;i<len;i++)
        {
            let curr=queue.shift()
            res.at(-1).push(curr.val)
            curr.left&&queue.push(curr.left)
            curr.right&&queue.push(curr.right)
        }
    }
[
