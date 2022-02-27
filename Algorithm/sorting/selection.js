const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let index = 0;
  let end = array.length;
  let indexOfShortestNum = index;

  while(index < end){
    let pointer = index + 1;
    while(pointer < end){
      if(array[pointer] < array[indexOfShortestNum]) 
        indexOfShortestNum = pointer;
      if(pointer === end - 1)
        swap(array, indexOfShortestNum, index);
      pointer++;
    }
    console.log(array);
    index++;
  }
}

function swap(array, i ,j){
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

selectionSort(numbers);
console.log("-----------------");
console.log(numbers);