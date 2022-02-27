const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

  let index = 0;
  let end = numbers.length;
  
  while(end > 0){
    while((index +1 ) < end){
      if(array[index] > array[index+1]) swap(array, index, index+1);
      index++;
    }
    end--;
    index = 0;
  }
}

function swap(array, i, j){
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

bubbleSort(numbers);
console.log(numbers);