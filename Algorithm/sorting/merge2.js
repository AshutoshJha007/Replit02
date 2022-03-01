const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergesort(array){
  if(array.length === 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0,mid);
  let right = array.slice(mid);

  return merge(
    mergesort(left),
    mergesort(right)
  )
}

function merge(left, right){
  let final = [];
  let leftIndex = 0 ;
  let rightIndex = 0 ;
  while( leftIndex < left.length &&
         rightIndex < right.length ){
    
          if( left[leftIndex] < right[rightIndex] ){
            final.push(left[leftIndex]);
            leftIndex++;
          }else{
            final.push(right[rightIndex]);
            rightIndex++;
          }
    
  }

  return final.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergesort(numbers)
console.log(answer);
