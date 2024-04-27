// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1
//     while(leftIndex<=rightIndex){
//         let middleIndex  = Math.floor((leftIndex+rightIndex)/2)
//         if(arr[middleIndex]===target){
//             return true
//         }else if(arr[middleIndex]<target){
//             leftIndex = middleIndex+1
//         }else if(arr[middleIndex]>target){
//             rightIndex = middleIndex - 1
//         }
//     }
//     return false
// }


// // Example usage
// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
// const target = 4;

// console.log( binarySearch(sortedArray, target));

// function binarySearch(arr){
     
// }

// const sortedArray = [1,3,5,7,9,11,13,15];
// const target = 5

// console.log(binarySearch(sortedArray,target));



// //binerySearch using recurtion

// function binarySearch(arr,target,left,right){
//     if (left > right) {
//         // Base case: target is not found
//         return -1;
//       }

//     let middleIndex = Math.floor((left + right) / 2);
    
  
//     if(arr[middleIndex]==target){
//         return middleIndex
//     }else if(arr[middleIndex]<target){
//         left = middleIndex-1
//         return binarySearch(arr, target, middleIndex + 1, right);
//     }else if(arr[middleIndex]>target){
//         right= middleIndex+1
//         return binarySearch(arr, target, middleIndex - 1, right);
//     }
//     return middleIndex
// }

// let arr = [1,2,3,4,5,6,7,8]
// let target =44
// left = 0;
// right = arr.length-1

// console.log(binarySearch(arr,target,0,right));




// function insertIntoSortedArray(arr, element) {
//     let left = 0;
//     let right = arr.length - 1;

//     // Find the correct insertion index
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (arr[mid] === element) {
//             // If the element is equal to mid, insert at mid
//             arr.splice(mid, 0, element);
//             return arr;
//         } else if (arr[mid] < element) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     // If the element is not found, `left` will be the correct insertion index
//     arr.splice(left, 0, element);
//     return arr; 
// }

// // Example usage
// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
// const newElement =2;

// console.log(insertIntoSortedArray(sortedArray, newElement)); // Output: [1, 3, 5, 7, 8, 9, 11, 13, 15]






// // delete mid Element in linkedList


// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

// class linkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size =0;
//     }

//     append(value){
//         const newNode = new Node(value);
//         if(this.head===null){
//             this.head = newNode;
//             this.tail = newNode
//         }else{
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         this.size++
//     }

//     deleteMid(){
//         let mid = Math.floor( this.size/2)
//         let prev = this.head
//         for(let i=0;i<mid-1;i++){
//             prev = prev.next
//         }
//         let curr = prev.next;
//         prev.next = curr.next
//     }
    
//     print(){
//         let curr = this.head;
//         while (curr) {
//             console.log(curr.value);
//             curr = curr.next
             
//         }
        
//     }
// }


// const list = new linkedList();

// list.append(1)
// list.append(2)
// list.append(3)

// list.deleteMid()
// list.print()



