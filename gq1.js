function firstRecurring(array1){
  let bucket = [];
  for(let i=0;i<array1.length;i++){
    if(bucket && bucket.length){
      for(let j=0; j<bucket.length ;j++){
        if(array1[i] === bucket[j]){
          return array1[i];
          break;
        }
      }
    }
    bucket.push(array1[i]);
  }
  return undefined;
}

console.log(firstRecurring([2,1,2,3,4]));