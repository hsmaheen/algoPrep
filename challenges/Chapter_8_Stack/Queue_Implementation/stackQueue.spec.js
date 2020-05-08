import { StackQueue } from './stackQueue';

describe('Stack Queue implementation should work', () => {
  test('queue implementation should work for multiple elements', () => {
    const queue = new StackQueue();
    queue.queue('A');
    queue.queue('B');
    queue.queue('C');
    queue.queue('D');
    queue.queue('E');
    expect(queue.deQueue().data).toBe('A');
  });

  test('queue implementation should work for one element', () => {
    const queue = new StackQueue();
    queue.queue('A');
    expect(queue.deQueue().data).toBe('A');
  });

  test('queue implementation should work 0 elements', () => {
    const queue = new StackQueue();
    expect(queue.deQueue()).toBe(null);
  });
});
