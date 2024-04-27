// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr;
//     }

//     let middle = Math.floor(arr.length / 2); 
//     let left = arr.slice(0, middle);
//     let right = arr.slice(middle);
    
//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right){
//     let resultArray = [], leftIndex = 0, rightIndex = 0;

//     while(leftIndex < left.length && rightIndex < right.length){
//         if(left[leftIndex] < right[rightIndex]){
//             resultArray.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             resultArray.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return resultArray
//         .concat(left.slice(leftIndex))  
//         .concat(right.slice(rightIndex));
// }

// const arr = [34, 42, 24, 33, 23, 53, 24, 11];
// console.log(mergeSort(arr));




function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle);
    let right = arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))   
}

function merge(left,right){
    let leftIndex=0;
    let rightIndex =0;
    const resultArray = []
    while(leftIndex<left.length&&rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            resultArray.push(left[leftIndex])
            leftIndex++
        }else{
            resultArray.push(right[rightIndex])
            rightIndex++
        }
    }
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}



const arr = [34, 42, 24, 33, 23, 53, 24, 11];
console.log(mergeSort(arr));
