// https://leetcode.com/problems/min-stack/

class MinStack {
  constructor() {
    this.items = [];
  }
    
/** 
 * @param {number} val
 * @return {void}
 */
  push(val) {
    this.items.push(val);
  }
    
/**
 * @return {void}
 */
  pop() {
    this.items.pop();
  }
    
/**
 * @return {number}
 */
  top() {
    return this.items[this.items.length - 1];
  }

/**
 * @return {number}
 */
  getMin() {
    if (this.items.length === 0) return;
    let min = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      if (min > this.items[i]) {
        min = this.items[i];
      }
    }
    return min;
  }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * const obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * const param_3 = obj.top()
 * const param_4 = obj.getMin()
 */
