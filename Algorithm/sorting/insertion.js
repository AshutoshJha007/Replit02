const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for(let i = 0 ; i < array.length - 1 ; i++){
    if(array[i] > array[i+1]) sort(array, i+1);
  }
}

function sort(array, finalPointer){
  for(let index = finalPointer; index > 0 ; index--){
    if(array[index-1] > array[index]) swap(array, index-1, index);
  }
}

function swap(array, i ,j){
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  
}

insertionSort(numbers);
console.log(numbers);