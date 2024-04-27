

// //Remove duplicates in sorted linked list
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
//     append(value){
//         const newNode = new Node(value);
//         if(this.head ===null){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
            
//             this.tail.next =newNode;
//             this.tail = newNode
//         }
//     }

//     removeDuplicates(){
//         let curr = this.head
//         while(curr&&curr.next){
//             if(curr.value===curr.next.value){
//                 curr.next = curr.next.next
//             }else{
//                 curr = curr.next
//             }
//         }
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
// list.append(2)
// list.append(2)
// list.append(3)
// list.append(6)
// list.append(4)
// list.append(5)
// list.append(6)
// list.removeDuplicates()
// list.print()
