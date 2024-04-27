function quickSort(arr){
  if(arr.length<2){
    return arr
  }
  let pivot = arr[0]
  let left = [];
  let right = []
  for(let i=1;i<arr.length;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}

const arr = [34,42,24,83,23,53,24,11]
console.log(quickSort(arr));