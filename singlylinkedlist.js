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

// Add two numbers solution
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0); // new list
  let node = head; // head
  let carry = 0;

  while (l1 || l2) {
    // Obtain the values of l1 and l2
    let l1Value = l1 ? l1.val : 0;
    let l2Value = l2 ? l2.val : 0;

    // Sum of two values
    let sum = l1Value + l2Value + carry;
    carry = 0;
    let newValue = sum;

    // strip off the carry over
    if (sum > 9) {
      newValue = sum % 10; // striping of the 10 place
      carry = 1;
    }
    // Take our new value and assign to a linked list
    node.next = new ListNode(newValue);
    node = node.next;

    // Traversal
    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry) {
    node.next = new ListNode(carry);
  }

  return head.next;
};

var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(0); // Establish a linked list w/ 0 pointed to the head used as a dummy head
  let node = head; // Declare a variable node initialzie to the linked list

  // Iterate through the linked list if they're not null so while they exist

  while (l1 && l2) {
    // IF the the value at l1 is less than l2 value
    if (l1.val < l2.val) {
      // Set the node next from the head to l1
      node.next = l1;
      l1 = l1.next; // iterate to the next node in l1
    } else {
      // Otherwise
      node.next = l2; // Set node to l2
      l2 = l2.next; // iterate to the next node in l2
    }

    // Update node:
    node = node.next;
  }
  // IF the list is still not null
  if (l1) {
    node.next = l1;
    l1 = l1.next;
  }

  if (l2) {
    node.next = l2;
    l2 = l2.next;
  }

  return head.next;
};

var reverseBetween = function (head, m, n) {
  if (head === null) return null;

  let prevNode = null;
  let currNode = head;

  while (m > 1) {
    prevNode = currNode;
    currNode = currNode.next;
    m--;
    n--;
  }

  let connection = prevNode;
  let tail = currNode;

  while (n > 0) {
    let nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
    n--;
  }

  if (connection) {
    connection.next = prevNode;
  } else {
    head = prevNode;
  }

  tail.next = currNode;

  return head;
};
