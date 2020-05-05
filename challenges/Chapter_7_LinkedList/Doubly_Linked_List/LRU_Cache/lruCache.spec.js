import { LRUCache } from './lruCache';

describe('LRU Cache should work as expected', () => {
  describe('LRU Cache put should work', () => {
    test('should work with 1 element', () => {
      const lruCache = new LRUCache(3);
      lruCache.write('a', 1);
      expect(lruCache.head.val).toBe(1);
      expect(lruCache.head.key).toBe('a');
      expect(lruCache.length).toBe(1);
    });

    test('should work with 2 element', () => {
      const lruCache = new LRUCache(3);
      lruCache.write('a', 1);
      lruCache.write('b', 2);
      expect(lruCache.head.val).toBe(2);
      expect(lruCache.head.key).toBe('b');
      expect(lruCache.tail.key).toBe('a');
      expect(lruCache.tail.val).toBe(1);
      expect(lruCache.length).toBe(2);
    });

    test('should work with when overwriting cache', () => {
      const lruCache = new LRUCache(3);
      lruCache.write('a', 1);
      lruCache.write('b', 2);
      lruCache.write('c', 3);
      lruCache.write('b', 4);
      expect(lruCache.head.val).toBe(4);
      expect(lruCache.head.key).toBe('b');
      expect(lruCache.tail.key).toBe('a');
      expect(lruCache.tail.val).toBe(1);
      expect(lruCache.length).toBe(3);
    });
  });

  describe('LRU Cache should store elements correctly', () => {
    test('should work with 1 element', () => {
      const lruCache = new LRUCache();
      lruCache.write('a', 1);
      const node = lruCache.cache.get('a');
      expect(node.next).toBe(null);
      expect(node.prev).toBe(null);
      expect(lruCache.cache.size).toBe(1);
    });

    test('should work with 2 element', () => {
      const lruCache = new LRUCache();
      lruCache.write('a', 1);
      lruCache.write('b', 2);
      const node = lruCache.cache.get('b');
      expect(node.next.val).toBe(1);
      expect(node.next.key).toBe('a');
      expect(lruCache.cache.size).toBe(2);
    });

    test('should work with when overwriting cache', () => {
      const lruCache = new LRUCache(3);
      lruCache.write('a', 1);
      lruCache.write('b', 2);
      lruCache.write('c', 3);
      lruCache.write('d', 4);
      lruCache.write('b', 5);
      const res = lruCache.cache.has('a');
      const node = lruCache.cache.get('c');

      expect(node.prev.val).toBe(4);
      expect(node.prev.key).toBe('d');
      expect(node.next).toBe(null);
      expect(lruCache.cache.size === 3);
      expect(res).toBe(false);
    });
  });

  describe('LRU Cache read should work ', () => {
    test('should work with 1 element', () => {
      const lruCache = new LRUCache();
      lruCache.write('a', 1);
      const node = lruCache.read('a');
      expect(node.next).toBe(null);
      expect(node.prev).toBe(null);
      expect(node.val).toBe(1);
      expect(node.key).toBe('a');
      expect(lruCache.cache.size).toBe(1);
    });

    test('should work with 2 element', () => {
      const lruCache = new LRUCache();
      lruCache.write('a', 1);
      lruCache.write('b', 2);
      const node = lruCache.read('a');
      expect(node.val).toBe(1);
      expect(node.key).toBe('a');
      expect(lruCache.head.key).toBe('a');
      expect(lruCache.head.next.val).toBe(2);
      expect(lruCache.tail.val).toBe(2);
    });

    test('should return null when element does not exist', () => {
      const lruCache = new LRUCache();
      lruCache.write('a', 1);
      lruCache.write('b', 2);
      const node = lruCache.read('c');
      expect(node).toBe(null);
    });
  });
});
