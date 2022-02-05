//find the first recurring [2,1,1,2] =>1


function findFirstRecurring(array) {
  if(!array && !array.length){
    return undefined;
  }
  const map = {};
  for(let i=0;i<array.length;i++) {
    console.log(map);
    if(map[array[i]] !== undefined){
      return array[i]
    }
    map[array[i]] = i;
  }
  
  return undefined;
  
}

console.log(findFirstRecurring([2,1,3,4]))