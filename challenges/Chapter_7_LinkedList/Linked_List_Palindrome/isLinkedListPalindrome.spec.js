import { LinkedList } from '../Implementation/linkedList';
import { isLinkedListAPalindrome } from './isLinkedListPalindrome';

describe('Linked List Palindrome Algo should work', () => {
  test('should return true when its a even palindrome', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');
    list.append('B');
    list.append('A');
    expect(isLinkedListAPalindrome(list.head)).toBe(true);
  });

  test('should return true when its a odd palindrome', () => {
    const list = new LinkedList();
    list.append('K');
    list.append('A');
    list.append('Y');
    list.append('A');
    list.append('K');
    expect(isLinkedListAPalindrome(list.head)).toBe(true);
  });

  test('should return false when its not a palindrome', () => {
    const list = new LinkedList();
    list.append('K');
    list.append('A');
    list.append('Y');
    list.append('B');
    list.append('K');
    expect(isLinkedListAPalindrome(list.head)).toBe(false);
  });
});
