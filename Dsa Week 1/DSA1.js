// let string = "akbarhaleeL";

// let arr = string.split('')

// for (let i = 0; i < arr.length; i++) {
//     let isUnique = true;
//     for (let j = 0; j < arr.length; j++) {
//         if (i !== j && arr[i] === arr[j]) {
//             isUnique = false;
//             break;
//         }
//     }
//     if (isUnique) {
//         console.log(arr[i]);
//         return 
//     }
// }


// // binarySearch

// function binarySearch(arr,taget){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1
//     while(leftIndex<=rightIndex){
//     let leftIndex = 0;
//         if(arr[middleIndex]===taget){
//             return true
//         }else if(arr[middleIndex]<taget){
//             leftIndex = middleIndex+1
//         }else if(arr[middleIndex]>taget){
//             rightIndex = middleIndex -1
//         }
//     }
//     return false
// }

// console.log(binarySearch(arr=[1,2,3,4,5],taget=3));



// function binarySearch(arr,taget,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return false
//     }
//     let middleIndex = Math.floor((leftIndex+rightIndex)/2);
//     if(arr[middleIndex]===taget){
//         return middleIndex
//     }else if(arr[middleIndex]<taget){
//         leftIndex = middleIndex+1
//     }else if(arr[middleIndex]>taget){
//         rightIndex = middleIndex-1
//     }
//     return binarySearch(arr,taget,leftIndex,rightIndex)
// }

// console.log(binarySearch(arr=[1,2,3,4,5],taget=5,0,arr.length-1));





function binarySearch(arr,t,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return false
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(arr[middleIndex]===t){
        return middleIndex
    }else if(arr[middleIndex]<t){
        leftIndex = middleIndex +1
        return binarySearch(arr,t,leftIndex,rightIndex)
    }else if(arr[middleIndex]>t){
        rightIndex = middleIndex -1
       return binarySearch(arr,t,leftIndex,rightIndex)
    }
}

let arr = [1,2,3,4,5,6];
let t = 5;
let leftIndex = 0;
let rightIndex = arr.length-1

console.log(binarySearch(arr,t,leftIndex,rightIndex));

















