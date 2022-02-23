function findFirstRecurring(array){
  
  if(array && array.length){
    const hash = new Set();
    for(let i=0; i<array.length;i++){
      //check if there is an hash for the key
      const found = hash.has(array[i]);
      if(found){
        return array[i];
      }
      hash.add(array[i]);
    }
  }
  return undefined;
}

console.log(findFirstRecurring([2,1,3,4]))