

// function insertionSort(arr){
//         for(let i=1;i<arr.length;i++){
//             let temp = arr[i];
//             let j=i-1;
//             while(j>=0&&arr[j]>temp){
//                 arr[j+1] = arr[j]; 
//                 j--
//             }
//             arr[j+1] = temp 
//         }
//         return arr
// }

// const arr = [43,21,32,13,53,21];
// console.log(insertionSort(arr));



function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let temp = arr[i];
        let j = i-1
        while(j>=0&&arr[j]>temp){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp
    }
    return arr
}

const arr = [43,21,32,13,53,21];
console.log(insertionSort(arr));
