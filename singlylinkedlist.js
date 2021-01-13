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
}
