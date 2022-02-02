console.log(mergeSortArrays([0,3,4,31], [4,6,30]));
//[0,3,4,4,6,30,31]
console.log(mergeSortArrays([4,6,30],[0,3,4,31]));
console.log(mergeSortArrays([4],[0,3,4,31]));

function mergeSortArrays(arry1, arry2){
  const totalLength = arry1.length + arry2.length;

  if(totalLength <= 0){
    return []
  }
  let index = 0;
  const final = [];
  let i=0,j =0;
  while(index < totalLength-1 ){
    if(arry1[i] <= arry2[j]){
      final.push(arry1[i]);
      i++
    }else if(arry1[i] > arry2[j]){
      final.push(arry2[j]);
      j++
    }
    if(j> arry2.length-1){
      final.push(arry1[i]);
      i++
    }
    else if(i>arry1.length-1){
      final.push(arry2[j]);
      j++;
    }
    index ++;

  }
  return final;
}