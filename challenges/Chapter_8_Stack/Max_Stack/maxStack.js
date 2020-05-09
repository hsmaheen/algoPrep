import { Stack } from '../Implementation/stack';

export class MaxStack {
  constructor() {
    this.dataStack = new Stack();
    this.maxKeeper = new Stack();
  }

  push(data) {
    if (!data || !Number.isFinite(data)) {
      return;
    }

    this.dataStack.push(data);

    const currMax = this.maxKeeper.peek();
    if (currMax === null) {
      this.maxKeeper.push(data);
    } else if (data > currMax.data) {
      this.maxKeeper.push(data);
    }
  }

  getMax() {
    return this.maxKeeper.peek();
  }

  pop() {
    const dataToPop = this.dataStack.pop();
    if (dataToPop) {
      const currMax = this.maxKeeper.peek();
      if (currMax.data === dataToPop.data) {
        this.maxKeeper.pop();
      }
    }

    return dataToPop;
  }
}
