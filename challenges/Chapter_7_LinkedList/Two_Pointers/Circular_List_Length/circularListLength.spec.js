import { getCircularListLength } from './circularListLength';
import { LinkedList } from '../../Implementation/linkedList';

describe('Is LinkedList Circular function should work', () => {
  test('should return true for a circular linked list', () => {
    const cList = new LinkedList();
    cList.append(3);
    cList.append(4);
    cList.append(5);
    cList.append(6);
    cList.append(7);
    const last = cList.getLast();
    const secondNode = cList.getAt(2);
    last.next = secondNode;

    expect(getCircularListLength(cList)).toBe(3);
  });

  test('should return -1 for non-circular linked list', () => {
    const lList = new LinkedList();
    lList.append(3);
    lList.append(4);
    lList.append(5);
    lList.append(6);
    lList.append(7);
    expect(getCircularListLength(lList)).toBe(-1);
  });

  test('should return true for a circular linked list of length 1', () => {
    const cList = new LinkedList();
    cList.append(3);
    const last = cList.getLast();
    const firsNode = cList.getAt(0);
    last.next = firsNode;

    expect(getCircularListLength(cList)).toBe(1);
  });

  test('should return null for empty linked list', () => {
    const cList = new LinkedList();
    expect(getCircularListLength(cList)).toBe(null);
  });
});
