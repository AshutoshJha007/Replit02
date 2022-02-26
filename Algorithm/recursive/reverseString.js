//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  if(str === "") return "";
  return reverseString(str.substr(1)) + str.charAt(0);

}

console.log(reverseString('yoyo mastery'))
//should return: 'yretsam oyoy'

function reverseStringR2(str){
  let reverseString = new Array();
  let strArray = str.split('');

  function addToArray(strArray){
    if(strArray.length >= 1){
      reverseString.push(strArray.pop());
      addToArray(strArray);
    }
    return;
  }
  addToArray(strArray);
  return reverseString.join('');
  
}

console.log(reverseStringR2("yoyo mastery"));