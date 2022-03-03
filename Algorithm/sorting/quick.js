const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){

  let length = array.length;
  let pivot ;
  let partionIndex ;

  if(left < right) {
    pivot = right;
    partionIndex = partion( array, pivot, left, right);

    quickSort(array, left, partionIndex - 1);
    quickSort(array, partionIndex + 1, right);
  }

  return array;
}

function partion ( array , pivot , left, right) {
  let pivotValue = array[pivot];
  let partionIndex = left;

  for(let i = left; i < right ; i++ ){
    if(array[i] < pivotValue){
      swap (array, i, partionIndex);
      partionIndex ++;
    }
  }

  swap(array, pivot, partionIndex );
  return partionIndex;
}

function swap( array, i ,j ){
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);