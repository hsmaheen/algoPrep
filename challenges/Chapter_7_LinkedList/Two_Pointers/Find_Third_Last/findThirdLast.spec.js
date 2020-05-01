import { LinkedList } from '../../Implementation/linkedList';
import { findThirdLastNode } from './findThirdLastNode';

describe('Find Third Last of LinkedList should work', () => {
  test('should find third last element when list size is 5', () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    list.append(7);
    expect(findThirdLastNode(list)).toBe(list.getAt(2));
  });

  test('should find third last element when list size is 4', () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    expect(findThirdLastNode(list)).toBe(list.getAt(1));
  });

  test('should find third last element when list size is 4', () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    expect(findThirdLastNode(list)).toBe(list.getAt(1));
  });

  test('should find third last element when list size is 3', () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    list.append(5);
    expect(findThirdLastNode(list)).toBe(list.getAt(0));
  });

  test('should return null when list size is 2', () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    expect(findThirdLastNode(list)).toBe(null);
  });

  test('should return null when list size is 1', () => {
    const list = new LinkedList();
    list.append(3);
    expect(findThirdLastNode(list)).toBe(null);
  });

  test('should return null when list size is 0', () => {
    const list = new LinkedList();
    expect(findThirdLastNode(list)).toBe(null);
  });
});
