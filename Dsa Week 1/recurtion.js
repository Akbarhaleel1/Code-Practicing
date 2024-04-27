// function fibonacci(num){
//     let arr=[0,1];
//     for(let i=2;i<num;i++){
//         arr[i] = arr[i-1]+arr[i-2]
//     }
//     return arr
// }

const { log } = require("console");

// console.log(fibonacci(10));



// function fibonacci(num){
    
//         if(num<2){
//             return num
//         }
//         return fibonacci(num-1)+fibonacci(num-2)

// }

// console.log(fibonacci(10));



// function fibonacci(num){
//     let arr =[0,1];
//     for(let i=2;i<num;i++){
//         arr[i]=arr[i-1]+arr[i-2]
//     }
//     return arr
// }

// console.log(fibonacci(5));






function fibonacci(num){
    if(num<2){
        return num
    }
    return fibonacci(num-1)+fibonacci(num-2)
}

console.log(fibonacci(5));