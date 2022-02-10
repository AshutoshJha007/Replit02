//10-->5--->7


class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList{
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList(){
    let counter =0;
    const array = new Array();
    let currentNode = this.head;
    while(counter < this.length){
      array.push(currentNode.value);
      currentNode = currentNode.next;
      counter++;
    }
    console.log(array);
  }

  insert(index, value){
    const newNode = new Node(value);
    if(index === 0){
      return this.prepend(value);
    }
    if(index >= this.length){
      return this.append(value);
    }
    let header = this.traverseDoubleNode(index);
    if(this.isForward(index)){
      let nextNode = header.next;
      header.next = newNode;
      nextNode.previous = newNode;
      newNode.next = nextNode;
      newNode.previous = header;

    }else{
      let previousNode = header.previous;
      newNode.next = header;
      newNode.previous = previousNode;
      previousNode.next = newNode;
      header.previous = newNode;
    }
    this.length++;

  }

  isForward(index){
    if(index > this.length/2){
      return false;
    }
    return true;
  }

  traverseDoubleNode(index){
    let forward = this.isForward(index);
    let forwardNode = this.head;
    let backwordNode = this.tail;
    if(forward){
      let counter = 1;
      while(counter < index){
        forwardNode = forwardNode.next;
        counter++;
      }
    }else {
      let counter = this.length;
      while(counter > index+1){
        backwordNode = backwordNode.previous;
        counter--;
      }
    }
    return forward ? forwardNode : backwordNode;
  }


  remove(index){
    if(index === 0){
      this.head = this.head.next;
      this.head.previous=null;
      this.length--;
      return;
    }
    let header = this.traverseDoubleNode(index);
   // console.log(header);
    if(this.isForward(index)){
      let unwantedNode = header.next;
      let toAttachNode = unwantedNode.next;
      header.next = toAttachNode;
      toAttachNode.previous = header;
    }else{
      //delete the header
      if(header.next === null){
        this.tail = this.tail.previous;
        this.tail.next = null;
      }else{
        let nextToHeader = header.next;
        let previousToHeader = header.previous;
        previousToHeader.next = nextToHeader;
        nextToHeader.previous= previousToHeader;
      }
    }
    this.length--;
  }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(7)
myLinkedList.prepend(44);
myLinkedList.insert(1,55);
myLinkedList.insert(3,99);
myLinkedList.printList();
myLinkedList.remove(1);
myLinkedList.printList();
myLinkedList.remove(3);
myLinkedList.printList();

//console.log(myLinkedList);