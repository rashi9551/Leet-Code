/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root,count=1) {
    if(!root)return 0
    if(!root.left && !root.right)return count
    if(!root.left) return minDepth(root.right, count + 1);
    if(!root.right) return minDepth(root.left, count + 1);
    return Math.min(minDepth(root.left, count + 1), minDepth(root.right, count+ 
1)); 
};
[
[3,9,20,null,null,15,7]
[2,null,3,null,4,null,5,null,6]
2
5
2
5
