const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const mid = Math.floor(array.length / 2);
  //console.log(mid);
  const left = [], right = [];
  for(let index = 0 ; index < array.length ; index++){
    if(index < mid) left.push(array[index]);
    else right.push(array[index]);
  }
  //console.log(left, right);
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  console.log(left,right);
  if(left === undefined && right === undefined) return;
  else if( left === undefined) return right;
  else if( right === undefined) return left;
  
  let counter = left.length + right.length;
  let i = 0;
  let j = 0;
  let final = [];
  while(counter > 0){
    if(left[i] !== undefined && left[i] < right[j]){
      final.push(left[i]);
      i++;
    }else if(right[j] !== undefined && right[j] < left[i]){
      final.push(right[j]);
      j++;
    }
    if(left[i] === undefined && right[j] !== undefined){
      while(j < right.length) {
        final.push(right[j]);
        j++;
      }
    }
    if(right[j] === undefined && left[i] !== undefined){
      while(i < left.length) {
        final.push(left[i]);
        i++;
      }
    }
    counter--;
  }
  return final;
}


const answer = mergeSort(numbers);
console.log(answer);