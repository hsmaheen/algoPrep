import { LinkedList } from '../Implementation/linkedList';

export function sortLinkedList(list = new LinkedList()) {
  if (list === null || list.head === null) {
    return null;
  }

  const list0 = new LinkedList();
  const list1 = new LinkedList();
  const list2 = new LinkedList();

  let node = list.head;
  while (node) {
    switch (node.data) {
      case 0:
        list0.append(node.data);
        break;
      case 1:
        list1.append(node.data);
        break;
      case 2:
        list2.append(node.data);
        break;
      default:
        throw Error('Sorting is not possible for this');
    }

    node = node.next;
  }

  const finalList = new LinkedList();
  appendList(finalList, list0);
  appendList(finalList, list1);
  appendList(finalList, list2);

  return finalList;
}

function appendList(original = new LinkedList(), listToAdd = new LinkedList()) {
  if (listToAdd === null || listToAdd.head === null) {
    return;
  }

  const last = original.getLast();
  if (last) {
    last.next = listToAdd.head;
  } else {
    original.head = listToAdd.head;
  }
}
