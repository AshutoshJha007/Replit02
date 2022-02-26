//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIteration(str) {
  let reverse = new Array ();
  for(let i = str.length - 1 ; i >= 0 ; i-- ){
    reverse.push(str[i]);
  }
  return reverse.join('');
}

console.log(reverseStringIteration('yoyo mastery'));
//should return: 'yretsam oyoy'

function reverseString(str){
  let reverse = new Array();
  getStringReversal(reverse,str, str.length-1);
  return reverse.join('');
}

function getStringReversal(reverse, str , pointer){
  if(pointer < 0) return;
  reverse.push(str[pointer]);
  pointer--;
  getStringReversal(reverse, str , pointer);
}

console.log(reverseString("yoyo mastery"));