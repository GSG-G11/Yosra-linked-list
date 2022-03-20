function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList(array = []) {
  this.head = null;
  this.tail = null;
  this.length = 0;

  if (Array.isArray(array)) {
    array.forEach((el) => {
      this.push(el);
    });
  }
}

DoublyLinkedList.prototype.push = function (val) {
  const newNode = new Node(val);
  if (this.length === 0) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
};

DoublyLinkedList.prototype.unshift = function (val) {
  const newNode = new Node(val);
  if (!this.length) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this;
};

DoublyLinkedList.prototype.insert = function (index, val) {
  if (index < 0 || index > this.length) {
    return undefined;
  }
  const newNode = new Node(val);
  let currentNode = this.head;
  let counter = 0;
  while (currentNode) {
    if (counter == index - 1) {
      break;
    }
    counter++;
    currentNode = currentNode.next;
  }

  newNode.prev = currentNode;
  newNode.next = currentNode.next;
  currentNode.next = newNode;
  this.length++;
  return this;
};

DoublyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }
  let currentNode = this.head;
  let counter = 0;
  while (currentNode) {
    if (index == counter) {
      break;
    } else {
      counter++;
      currentNode = currentNode.next;
    }
  }
  return currentNode;
};

DoublyLinkedList.prototype.get = function (index) {
  let node = this.getNode(index);
  if (node) {
    return node.val;
  }
  return null;
};

DoublyLinkedList.prototype.set = function (index, val) {
  let node = this.getNode(index);

  if (node) {
    node.val = val;
  } else {
    return undefined;
  }
};

DoublyLinkedList.prototype.pop = function () {
  if (!this.length) {
    return undefined;
  }

  let previousNode = this.tail.prev;
  let deletedNode = this.tail;
  deletedNode.next = null;
  this.tail = previousNode;

  this.length--;
  return deletedNode.val;
};

DoublyLinkedList.prototype.shift = function () {
  if (!this.length) {
    return undefined;
  }
  let node = this.head;
  this.head = this.head.next;
  node.next = null;

  this.length--;
  return node.val;
};

DoublyLinkedList.prototype.remove = function (index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }
  let node = this.head;
  let counter = 0;
  while (node) {
    if (counter == index - 1) {
      break;
    }
    counter++;
    node = node.next;
  }
  let removedNode = node.next;
  node.next = node.next.next;

  this.length--;
  return removedNode.val;
};

DoublyLinkedList.prototype.reverse = function () {
    let node = this.head;

    this.tail = this.head;

    while(node){
        let temp = node.next;
        node.next = node.prev;
        node.prev = node;
        node= temp;
    }
    this.head = this.tail;
    return this;
};
