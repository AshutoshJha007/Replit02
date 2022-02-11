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

  insert(index, value){
    if(index === 0){
      return this.prepend(value);
    }
    if(index >= this.length){
      return this.append(value);
    }
    const newNode = new Node(value);
    const headNode = this.traverseList(index-1);
    const holdingNode = headNode.next;
    headNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
  
  }

  traverseList(index){
    let currentNode = this.head;
    let counter =0;
    while(counter < index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index){
    if(index === 0){
      return this.head = this.head.next;
    }
    if(index > this.length){
      return null;
    }
    const headNode = this.traverseList(index-1);
    const tobeDeletedNode = headNode.next;
    const joinNode = tobeDeletedNode.next;
    headNode.next = joinNode;
    this.length--;
  }

  reverse(){
    if(!this.head.next){
      return this.head
    }
    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;
    while(second){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(7);
myLinkedList.printList();
myLinkedList.insert(1,99);
myLinkedList.printList();
myLinkedList.insert(200,88);
myLinkedList.printList();
myLinkedList.insert(0,6);
myLinkedList.printList();

myLinkedList.remove(2);
myLinkedList.printList();

myLinkedList.remove(3);
myLinkedList.printList();

myLinkedList.reverse();
myLinkedList.printList();
//console.log(myLinkedList);