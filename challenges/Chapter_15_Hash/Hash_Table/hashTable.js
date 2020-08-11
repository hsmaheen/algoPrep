export class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size).fill(null);
  }

  getHash(key) {
    if (!key) {
      return null;
    }

    let hash = 0;
    let primeNumber = 31;

    for (const char of key) {
      hash = hash * 31 + char.charCodeAt(0);
    }

    return hash % this.size;
  }

  set(key, value) {
    const idx = this.getHash(key);
    if (idx) {
      this.buckets[idx] = value;
    }
  }

  get(key) {
    const idx = this.getHash(key);
    if (idx) {
      return this.buckets[idx] || null;
    }
  }
}

const hashTable = new HashTable(100);
hashTable.set('hello', 'world');
hashTable.set('olleh', 'world1');
const val = hashTable.get('hello');
expect(val).toBe('world');
