import { Queue } from '../../Implementation/queueImplementation';

export class StockPriceDays {
  constructor(priceWindow) {
    this.dataQueue = new Queue();
    this.priceWindow = priceWindow;
  }

  addData(price, day) {
    const data = {
      price,
      day,
    };
    if (this.dataQueue.length === 0) {
      this.dataQueue.enqueue(data);
    } else {
      while (
        this.dataQueue.length > 0 &&
        day - this.dataQueue.peek().data.day > this.priceWindow
      ) {
        this.dataQueue.dequeue();
      }
      this.dataQueue.enqueue(data);
    }
  }

  getMax() {
    if (this.dataQueue.length === 0) {
      return null;
    }

    let node = this.dataQueue.peek();
    let max = Number.NEGATIVE_INFINITY;

    while (node) {
      max = Math.max(max, node.data.price);
      node = node.next;
    }
    return max;
  }
}

const stock = new StockPriceDays(4);
stock.addData(32, 1);
stock.addData(45, 1);
stock.addData(37, 2);
stock.addData(42, 55);
const res = stock.getMax();
