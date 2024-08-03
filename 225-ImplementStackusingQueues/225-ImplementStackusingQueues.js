
};
MyStack.prototype.push = function(x) {
    this.queue1.push(x);
 */
 * @return {void}
/** 
 * @param {number} x

};
    this.queue2 = [];
    this.queue1 = [];
var MyStack = function() {
/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    const poppedElement = this.queue1.shift();
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return poppedElement;
};

/**
 * @return {number}
[
["MyStack","push","push","top","pop","empty"]
[[],[1],[2],[],[],[]]
[null,null,null,2,2,false]
[null,null,null,2,2,false]
