import { DoublyLinkedList, Node } from './doubllyLinkedList';

describe('Doubly Linked List Implementation should work', () => {
  test('List is a class', () => {
    expect(typeof DoublyLinkedList.prototype.constructor).toEqual('function');
  });

  test('Node is a class', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  test('has properties "data" , "next" and "prev"', () => {
    const node = new Node('a', 'b', 'c');
    expect(node.data).toEqual('a');
    expect(node.next).toEqual('b');
    expect(node.prev).toEqual('c');
  });

  test('append function works with empty list', () => {
    const dll = new DoublyLinkedList();
    dll.append(1);
    expect(dll.head.data).toBe(1);
  });

  test('append function works with non-empty list', () => {
    const dll = new DoublyLinkedList();
    dll.append(1);
    dll.append(3);
    dll.append(2);
    expect(dll.tail.data).toBe(2);
    expect(dll.tail.prev.data).toBe(3);
    expect(dll.head.next.data).toBe(3);
    expect(dll.head.data).toBe(1);
    expect(dll.length).toBe(3);
  });

  test('removeLast function works with empty list', () => {
    const dll = new DoublyLinkedList();
    dll.removeTail();
    expect(dll.head).toBe(null);
    expect(dll.tail).toBe(null);
    expect(dll.length).toBe(0);
  });

  test('removeLast function works with list length is 1', () => {
    const dll = new DoublyLinkedList();
    dll.append(1);
    dll.removeTail();
    expect(dll.head).toBe(null);
    expect(dll.tail).toBe(null);
    expect(dll.length).toBe(0);
  });

  test('removeLast function works with non-empty list', () => {
    const dll = new DoublyLinkedList();
    dll.append(1);
    dll.append(3);
    dll.append(2);
    dll.removeTail();
    expect(dll.tail.data).toBe(3);
    expect(dll.tail.next).toBe(null);
  });

  test('removeHead function works with empty list', () => {
    const dll = new DoublyLinkedList();
    dll.removeHead();
    expect(dll.length).toBe(0);
    expect(dll.tail).toBe(null);
    expect(dll.head).toBe(null);
  });

  test('removeHead function works with list has only one element', () => {
    const dll = new DoublyLinkedList();
    dll.append(1);
    dll.removeHead();
    expect(dll.length).toBe(0);
    expect(dll.tail).toBe(null);
    expect(dll.head).toBe(null);
  });

  test('removeHead function works with list has only more than one element', () => {
    const dll = new DoublyLinkedList();
    dll.append(1);
    dll.append(2);
    dll.removeHead();
    expect(dll.head.data).toBe(2);
    expect(dll.tail.data).toBe(2);
    expect(dll.length).toBe(1);
  });

  test('removeHead function works with list has three elements', () => {
    const dll = new DoublyLinkedList();
    dll.append(1);
    dll.append(2);
    dll.append(3);
    dll.removeHead();
    expect(dll.head.data).toBe(2);
    expect(dll.head.next.data).toBe(3);
    expect(dll.length).toBe(2);
  });
});
