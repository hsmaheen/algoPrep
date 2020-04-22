import { sortLinkedList } from './sortLinkedList';
import { LinkedList } from '../Implementation/linkedList';

describe('Sort The Linked List', () => {
  test('should sort the list correctly', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(0);
    list.append(2);
    list.append(2);
    list.append(1);
    list.append(0);
    const expected = [0, 0, 1, 1, 2, 2];
    const sortedList = sortLinkedList(list).convertListToArray();
    expect(sortedList).toEqual(expected);
  });

  test("should sort the list when it has only 1's and 0's", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(0);
    list.append(1);
    list.append(0);
    const expected = [0, 0, 1, 1];
    const sortedList = sortLinkedList(list).convertListToArray();
    expect(sortedList).toEqual(expected);
  });

  test("should sort the list when it has only 1's", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(1);
    list.append(1);
    const expected = [1, 1, 1];
    const sortedList = sortLinkedList(list).convertListToArray();
    expect(sortedList).toEqual(expected);
  });

  test('should sort the list when it has already been sorted', () => {
    const list = new LinkedList();
    list.append(0);
    list.append(1);
    list.append(2);
    const expected = [0, 1, 2];
    const sortedList = sortLinkedList(list).convertListToArray();
    expect(sortedList).toEqual(expected);
  });
});
