
// // prime Number count
// const arr = [3,4,5,6,7,8,9,11];
// let count =0

// for(let i=0;i<arr.length;i++){
//     let m = arr[i]/2
//     let flag =0
//     for(let j=2;j<=m;j++){
//         if(arr[i]%j==0){
//             flag=1
//             break
//         }
//     }
//     if(flag==0){
//         count++
//     }   
// }

// console.log(count);



// const arr = [3,4,5,6,7,8,9,11];

// for(let i=0;i<arr.length;i++){
//     let flag = 0;
//     let m = arr[i]/2
//     for(let j=2;j<=m;j++){
//         if(arr[i]%j===0){
//             flag=1;
//             break
//         }
//     }
//     if(flag==0){
//         console.log(arr[i]);
//     }
// }



// const arr = [3,4,5,6,7,8,9,11];

// for(let i=0;i<arr.length;i++){
//     let m = Math.floor(arr[i]/2)
//     let prime=true
//     for(let j=2;j<=m;j++){
//         if(arr[i]%j==0){
//             prime =false
//             break
//         }
//     }
//     if(prime==true){
//         console.log("this is a prime number",arr[i]);
//     }else{
//         console.log("this is not a prime number",arr[i]);
//     }
// }