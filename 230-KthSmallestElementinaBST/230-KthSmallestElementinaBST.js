 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr=[]
   function inorder(root)
   {
    if(root)
    {
        inorder(root.left)
        arr.push(root.val)
        inorder(root.right)
    }
   } 
   inorder(root)
    arr.sort((a,b)=>(a-b))
    return arr[k-1]
};
[
