/**
 * @param {number} k
 */
class MyCircularQueue {
  constructor(k) {
    this.queue = [];
    this.size = k;
    this.count = 0;
    this.front = 0;
    this.rear = -1;
  }

  /** 
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
    if (this.isFull()) return false;
    this.rear++;
    this.queue[this.rear % this.size] = value;
    this.count++;
    return true;
  }

  /**
   * @return {boolean}
   */
  deQueue() {
    if (this.isEmpty()) return false;
    this.front++;
    this.count--;
    return value;
  }

  /**
   * @return {number}
   */
  Front() {
    if (this.isEmpty()) return -1;
    return this.queue[this.front % this.size];
  }

  /**
   * @return {number}
   */
  Rear() {
    if (this.isEmpty()) return -1;
    return this.queue[this.rear % this.size];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return (this.count === 0);
  }

  /**
   * @return {boolean}
   */
  isFull() {
    return (this.size === this.count);
  }
}
