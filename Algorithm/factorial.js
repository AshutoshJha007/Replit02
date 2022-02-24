// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if(number == 1){
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let factorial = 1;
  for(let i = number ; i >= 1 ; i--){
    factorial = factorial * i;
  }
  return factorial;
}

console.log(findFactorialIterative(5)); //5*4*3*2*1 = 120

console.log(findFactorialRecursive(5));