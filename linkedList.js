// 10-->5-->7
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length =1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList(){
    let array = [];
    let currentNode = this.head;
    while(currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(7);
myLinkedList.printList();
console.log(myLinkedList);