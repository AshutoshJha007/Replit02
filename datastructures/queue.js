//node
//queue
//peek
//enqueue
//dqueue
//isEmpty


class Node{
  constructor(value){
    this.data = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0
  }

  peek(){
    if(this.length != 0)
      return this.first.data;
    else
      return null;
  }

  enqueue(value){
    const newNode = new Node(value);
    if(!this.last){
      this.last = newNode;
      this.first = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue(){
    const item = this.first.value;
    const newFirst = this.first.next;
    this.first = newFirst;
    this.length--;
    if(this.length === 0){
      this.last = this.first;
    }
    return item;
  }

  isEmpty(){
    return this.length === 0 ? true : false;
  }
}

const myQueue = new Queue();
console.log(myQueue.isEmpty());
console.log(myQueue.peek());
myQueue.enqueue("Ashu");
myQueue.enqueue("tosh");
myQueue.enqueue("jha");
myQueue.dequeue();
console.log(myQueue.isEmpty());
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.isEmpty());
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.isEmpty());
console.log(myQueue.peek());
console.log(myQueue);