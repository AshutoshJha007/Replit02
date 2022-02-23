class MyArray{
  constructor(){
    this.length =0;
    this.items = {};
  }

  length(){
    return this.length;
  }

  get(index) {
    return this.items[index];
  }

  push(item){
    this.items[this.length] = item;
    this.length++;
  }

  pop(){
    let lastItem = this.items[this.length-1];
    delete this.items[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const itemValue = this.items[index];
    this.shiftItems(index);
    return itemValue;
  }

  shiftItems(index){
    let i = index;
    for( i; i< this.length ; i++){
      this.items[i]= this.items[i+1]
    }
    delete this.items[this.length -1];
    this.length--;
  }
}

const arry1 = new MyArray();
arry1.push("A");
arry1.push("B");
arry1.push("C");
arry1.push("D");
arry1.push("E");
console.log(arry1);
arry1.pop();
const value = arry1.get(0);
console.log(value);
console.log(arry1);

console.log(arry1.delete(2));
console.log(arry1);