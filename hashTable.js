class HashTable{
  constructor(address){
    this.data = new Array(address);
  }

  _hash(key){
    let hash = 0;
    for(let i =0;i<key.length;i++){
      hash = (hash + key.charCodeAt(i)) % this.data.length;
    }
    return hash;
  }

  set(key,value){
    const address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket){
        for(let i=0; i<currentBucket.length; i++){
          if(currentBucket[i][0] === key){
            return currentBucket[i][1];
          }
        }
    } 
    return undefined;   
  }
}

const basket = new HashTable(50);
basket.set('grapes', 100);
basket.set('apple', 5);

console.log(basket.get('grapes'));
