import { HashTable } from './hashTable';

describe('HashTale implementation shoudl work', () => {
  it('should set the value to the hashtable and also return the value', () => {
    const hashTable = new HashTable(100);
    hashTable.set('hello', 'world');
    hashTable.set('olleh', 'world1');
    const val = hashTable.get('hello');
    expect(val).toBe('world');
  });

  it('should  return null when the value does not exist', () => {
    const hashTable = new HashTable(100);
    hashTable.set('hello', 'world');
    hashTable.set('olleh', 'world1');
    const val = hashTable.get('test');
    expect(val).toBe(null);
  });
});
