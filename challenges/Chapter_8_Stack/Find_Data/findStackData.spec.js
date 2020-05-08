import { findStackData } from './findStackData';
import { Stack } from '../Implementation/stack';

describe('Find Stack Data Implementation should work', () => {
  test('should return false for empty stack', () => {
    const stack = new Stack();
    expect(findStackData(1, stack)).toBe(false);
    expect(findStackData()).toBe(false);
    expect(findStackData(null, stack)).toBe(false);
    expect(findStackData(1, null)).toBe(false);
  });

  test('should return true when data exists in stack', () => {
    const stack = new Stack();
    stack.push(0);
    stack.push(1);
    expect(findStackData(1, stack)).toBe(true);
    expect(stack.head.data).toBe(1);
    expect(stack.tail.data).toBe(0);
    expect(stack.length).toBe(2);
  });

  test('should return false when data does not exists in stack', () => {
    const stack = new Stack();
    stack.push(0);
    stack.push(1);
    expect(findStackData(7, stack)).toBe(false);
    expect(stack.head.data).toBe(1);
    expect(stack.tail.data).toBe(0);
    expect(stack.length).toBe(2);
  });

  test('should return true when data exists in stack and stack order should be maintained', () => {
    const stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    expect(findStackData(2, stack)).toBe(true);
    expect(stack.head.data).toBe(2);
    expect(stack.head.next.data).toBe(1);
    expect(stack.tail.data).toBe(0);
    expect(stack.length).toBe(3);
  });

  test('should return false when data exists in stack and stack order should be maintained', () => {
    const stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    expect(findStackData(7, stack)).toBe(false);
    expect(stack.head.data).toBe(2);
    expect(stack.head.next.data).toBe(1);
    expect(stack.tail.data).toBe(0);
    expect(stack.length).toBe(3);
  });
});
