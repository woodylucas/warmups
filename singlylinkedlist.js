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
}
