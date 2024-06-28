 */
var sumOfLeftLeaves = function(root) {
    let sum =0
    function rec(root){
        if(root){
        if(root.left&&!root.left.left&&!root.left.right){
            console.log(root.left.val)
            sum+=root.left.val
        }
        rec(root.left)
        rec(root.right)
        }
    }
    rec(root)
    return sum
 * @return {number}
 * @param {TreeNode} root
/**
 */
 * }
 *     this.right = (right===undefined ? null : right)
[
