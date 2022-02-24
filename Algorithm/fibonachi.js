// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
  let fib = new Array();
  for(let i = 0; i <= n ; i++ ){
    if(i === 0 ) fib.push(0);
    else if(i === 1) fib.push(1);
    else{
      fib.push(fib[i-1]+fib[i-2]);
    }
  }
  return fib[n];
}
console.log(fibonacciIterative(7));

function fibonacciRecursive(n) {
  if(n === 1){
    return 1;
  }if(n <= 0){
    return 0;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(1))