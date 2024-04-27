const arr = [64,25,12,22,11];

let min;


for(let i=0;i<arr.length;i++){
    let min = i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[min]>arr[j]){
            min = j
        }
    }
    if(min!=i){
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] =temp
    }
}

console.log(arr); 







// for(let i=0;i<arr.length-1;i++){
//     min = i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[min]>arr[j]){    
//             min = j
//         }
//     }
//     if(min!=i){
//         let temp = arr[i];
//         arr[i] = arr[min]
//         arr[min] = temp
//     }
// }

// console.log(arr);




