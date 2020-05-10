import { QueueArray } from './queueArray';

describe('Queue implementation using Array', () => {
  test('should add data to the queue', () => {
    const queue = new QueueArray(5);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.length).toBe(4);
    expect(queue.capacity).toBe(5);
  });

  test('should dequeue properly', () => {
    const queue = new QueueArray(5);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    const data = queue.dequeue();
    expect(queue.length).toBe(4);
    expect(queue.capacity).toBe(5);
    expect(data).toBe(1);
  });

  test('should not add data when queue capacity is 0', () => {
    const queue = new QueueArray(0);
    const res = queue.enqueue();
    const data = queue.dequeue();
    expect(data).toBe(null);
    expect(res).toBe(false);
  });
});
