class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // this method creates a new head
  insertFirst(data) {
    // do not override existing node
    this.head = new Node(data, this.head);
  }
  // size method which counts the nodes
  size() {
    let count = 0;
    let node = this.head; // Declare a node variable initialize to this.head
    // While the node exist
    while (node) {
      count++; // Increment count variable
      node = node.next; // reinitialize node to next node (if node.next is null the loop will break)
    }
    return count; // return count (which is the size)
  }

  // First node method
  getFirst() {
    return this.head; // the first node element is the head
  }
  // Grab the tail
  getLast() {
    let node = this.head; // Declare a varible node initailzie to the head.

    if (!node) return null; // There is no node retrun nul

    // While node exist
    while (node) {
      // If there is no node next
      if (!node.next) {
        return node; // Return the node that is the tail
      }
      node = node.next; // Otherwise keep searching
    }
  }
  // Clear method
  // Set head to null
  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    // If there is no head, just return
    if (!this.head) {
      return;
    }
    // If there is no tail, set the head to null which means the head is the only item
    if (!this.head.next) {
      this.head = null;
      return;
    }
    // Previous node initialize to head
    let prevNode = this.head;
    // node initialize to the next node
    let node = this.head.next;
    // While there is a next node
    while (node.next) {
      // set previous to next node
      prevNode = node;
      // set next node to next node
      node = node.next;
    }
    prevNode.next = null;
  }

  insetLast(data) {
    const last = this.getLast();
    if (!this.head) {
      return;
    }

    if (last) {
      // There are exisiting nodes in our chain
      last.next = new Node(data);
    } else {
      // There are no nodes in the chain
      this.head = new Node(data);
    }
  }
}

// Midpoint

function midpoint(list) {
  // Two pointers pointed to the first node
  let slow = list.head;
  let fast = list.head;
  // Iterate through our linked list

  while (fast.next && fast.next.next) {
    slow = slow.next; // Advance by one element
    fast = fast.next.next; // Advance by two elements
  }

  return slow;
}

// Circular

function circular(list) {
  // Declare two pointers initialize to slow and fast
  let slow = list.head;
  let fast = list.head;

  // If this condtion breaks the node isn't circular
  while (fast.next && fast.next.next) {
    // Advance by one node
    slow = slow.next;
    // Advance by two nodes
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let slow = head;
  let fast = head;
  let counter = 1;

  while (counter <= k) {
    fast = fast.next;
    counter++;
  }

  if (fast === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
}
