import { getCircleStart } from './findCircularStart';
import { LinkedList } from '../../Implementation/linkedList';

describe('Circular Linked List, Find beginning Node should work', () => {
  test('should return the correct count for a circular list of length 3', () => {
    const cList = new LinkedList();
    cList.append(3);
    cList.append(4);
    cList.append(5);
    cList.append(6);
    cList.append(7);
    const last = cList.getLast();
    const secondNode = cList.getAt(2);
    last.next = secondNode;
    expect(getCircleStart(cList)).toBe(cList.getAt(2));
  });

  test('should return the correct count for a circular list of length 4', () => {
    const cList = new LinkedList();
    cList.append(3);
    cList.append(4);
    cList.append(5);
    cList.append(6);
    cList.append(7);
    cList.append(8);
    const last = cList.getLast();
    const secondNode = cList.getAt(2);
    last.next = secondNode;
    expect(getCircleStart(cList)).toBe(cList.getAt(2));
  });

  test('should return null for non-circular linked list', () => {
    const lList = new LinkedList();
    lList.append(3);
    lList.append(4);
    lList.append(5);
    lList.append(6);
    lList.append(7);
    expect(getCircleStart(lList)).toBe(null);
  });

  test('should return the correct count for a circular list of length 1', () => {
    const cList = new LinkedList();
    cList.append(3);
    const last = cList.getLast();
    const firsNode = cList.getAt(0);
    last.next = firsNode;

    expect(getCircleStart(cList)).toBe(cList.getAt(0));
  });

  test('should return null for empty linked list', () => {
    const cList = new LinkedList();
    expect(getCircleStart(cList)).toBe(null);
  });
});
