class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  // Add method:
  add(data) {
    this.children.push(new Node(data));
  }

  // Remove method:
  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }
}
