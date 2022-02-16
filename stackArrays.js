//stack
//peek
//push
//pop
//isEmpty

class Stack{
  constructor(){
    this.data = new Array();
  }

  peek(){
    if(!this.data){
      return null;
    }
    return this.data[this.data.length - 1];
  }

  push(value){
    this.data.push(value);
  }

  pop(){
    const item = this.data[this.data.length -1];
    this.data.pop();
    return item;
  }

  isEmpty(){
    return this.data.length == 0 ? true : false;
  }
}

const myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack);
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log(myStack.peek());
console.log(myStack);
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
console.log(myStack.isEmpty());