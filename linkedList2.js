//10-->5--->7


class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(value){
    this.head = {
      value:value,
      next:null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = {
      value:value,
      next:null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value){
    const newNode = {
      value:value,
      next:this.head
    }
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
    const newNode = {
      value:value,
      next:null
    }
    if(index === 0){
      return this.prepend(value);
    }
    if(index >= this.length){
      return this.append(value);
    }
    let header = this.traverseNode(index);
    newNode.next = header.next;
    header.next = newNode;
    this.length++;

  }

  traverseNode(index){
      let currentNode = this.head;
      let counter =1;
      while(counter < index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
  }

  remove(index){
    if(index === 0){
      this.head = this.head.next;
    }else{
      let header = this.traverseNode(index);
      if(index === this.length){
        header.next = null;
        this.tail = head;
      }
      let unwantedNode = header.next;
      let toBeAttachedNode = unwantedNode.next;
      header.next = toBeAttachedNode;
    }
    this.length--;
  }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(7)
myLinkedList.prepend(44);
myLinkedList.insert(1,55);
myLinkedList.remove(3);
myLinkedList.printList();
//console.log(myLinkedList);