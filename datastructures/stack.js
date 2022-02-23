//stack with linked list
//stack fucntions to support
//1. peek
//2. push
//3. pop
//4. isEmpty


class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  
  peek(){
    if(!this.top){
      return null;
    }
    return this.top.value;
  }

  push(value){
    const newNode = new Node(value);
    if(!this.top){
      this.bottom = newNode;
      this.top = this.bottom;
      //this.top.next = this.bottom;
    }else{
      const oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop
    }
    this.length++;
  }

  pop(){
    if(!this.top){
      return null;
    }
    const newTop = this.top.next;
    this.top = newTop;
    this.length--;
    if(this.length == 0){
      this.top = null;
      this.bottom = this.top;
    }
  }

  isEmpty(){
    return this.length ? false : true;
  }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log(myStack.isEmpty());
console.log(myStack)
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
console.log(myStack.isEmpty());
console.log(myStack.peek());