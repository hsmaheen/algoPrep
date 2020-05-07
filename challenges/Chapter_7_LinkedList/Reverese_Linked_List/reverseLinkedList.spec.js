import { LinkedList } from '../Implementation/linkedList';
import { reverseLinkedList } from './reverseLinkedList';

describe('Reverse Linked List', () => {
  test('should reverse linked list', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('D');
    list.append('E');
    const expected = ['E', 'D', 'C', 'B', 'A'];
    reverseLinkedList(list);

    expect(list.convertListToArray()).toEqual(expected);
    expect(list.tail.next).toBe(null);
  });

  test('should reverse linked list', () => {
    const list = new LinkedList();
    list.append('A');
    const expected = ['A'];
    reverseLinkedList(list);
    expect(list.convertListToArray()).toEqual(expected);
    expect(list.tail.next).toBe(null);
  });

  test('should reverse linked list', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');
    const expected = ['B', 'A'];
    reverseLinkedList(list);
    expect(list.convertListToArray()).toEqual(expected);
    expect(list.tail.next).toBe(null);
  });

  test('should reverse linked list', () => {
    const list = new LinkedList();
    reverseLinkedList(list);
    expect(list.convertListToArray()).toEqual([]);
    expect(list.tail).toBe(null);
  });
});
