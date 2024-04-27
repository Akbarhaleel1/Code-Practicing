
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size=0;
//     }

//     isEmpty(){
//         return this.head===null
//     }

//     arrayToLinkedList(array){
       
//         for(let value of array){
//             const newNode = new Node(value)
//            if(this.isEmpty()){
//             this.head = newNode;
//             this.tail = newNode; 
//            }else{
         
//             this.tail.next = newNode
//             this.tail = newNode
//             }
//             this.size++
         
//         }
//     }
//     print(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.value);
//             curr = curr.next
//         }
//     }
// }

// const array = [1,2,3,4,5,6];

// const list = new linkedList();
// list.arrayToLinkedList(array)
// list.print()




// //We can use this method also

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }
//     isEmpty(){
//         return this.head ===null;
//     }

//     append(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             let curr = this.tail;
//             this.tail = newNode;
//             curr.next = newNode
//         }
//     }

//     arrToLL(arr){
//         for(let i=0;i<arr.length;i++){
//             let temp = arr[i]
//             this.append(temp)
//         } 
//     }

//     print(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr);
//             curr = curr.next
//         }
//     }
// }

// const array = [1,2,3,4,5,6];

// const list = new linkedList();
// list.arrToLL(array)

// list.print()



class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(value){
        const newNode = new Node(value)
        if(this.head ===null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    arrayToLinkedlist(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i])
            this.size++
        }
    }
    print(){
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }
}


const list = new linkedList();
const array = [1,2,3,4,5,6]
list.arrayToLinkedlist(array)
list.print()
