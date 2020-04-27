import { getMedian } from './findMedian';
import { LinkedList } from '../../Implementation/linkedList';

describe('Get Median of Linked List Algo should work', () => {
  test('should return 3rd node when its a linked list of length 5', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(5);
    list.append(7);
    list.append(9);

    expect(getMedian(list)).toBe(list.getAt(2));
  });

  test('should return 2nd node when its a linked list of length 4', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(5);
    list.append(7);

    expect(getMedian(list)).toBe(list.getAt(1));
  });

  test('should return 1st node when its a linked list of length 1', () => {
    const list = new LinkedList();
    list.append(1);
    expect(getMedian(list)).toBe(list.getAt(0));
  });

  test('should return null when linked list is empty', () => {
    const list = new LinkedList();
    expect(getMedian(list)).toBe(null);
  });
});
