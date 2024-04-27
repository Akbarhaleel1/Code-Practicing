
// function binarySearch(arr,taget){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1;
    
//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(arr[middleIndex]===taget){
//         return middleIndex
//     }else if(arr[middleIndex]>taget){
//         rightIndex = middleIndex-1
//     }else if(arr[middleIndex]<taget){
//         leftIndex = middleIndex+1
//     }
// }
// return -1;
// }

// console.log(binarySearch(arr=[1,2,3,4,5],taget=5));









function binarySearch(arr,taget){
    let leftIndex = 0;
    let rightIndex = arr.length-1
    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);
        if(arr[middleIndex]===taget){
            return true
        }else if(arr[middleIndex]<taget){
            leftIndex = middleIndex+1
        }else if(arr[middleIndex]>taget){
            rightIndex = middleIndex -1
        }
    }
    return false
}

console.log(binarySearch(arr=[1,2,3,4,5],taget=3));






