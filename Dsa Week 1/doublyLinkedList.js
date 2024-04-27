 
class Node{
    constructor(value){
        this.value =value
        this.next = null
        this.prev = null
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    append(value){
        const newNode = new Node(value);
        if(this.head===null){
            this.head = newNode;
            this.tail = newNode
        }else{
            let curr = this.tail
            this.tail.next = newNode
            this.tail = newNode
            this.tail.prev = curr
        }
        this.size++
    }

    prepend(value){
        let newNode = new Node(value);
        if(this.head ===null){
            this.head = newNode;
            this.tail = newNode
        }else{
            let curr= this.head;
            this.head = newNode;
            this.head.next = curr
            curr.prev = newNode
            this.head.prev = null
        }
        this.size++
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    removeValue(value){
        if(this.head.value===value){
            this.head = this.head.next
        }else{
            let prev = this.head;
            while(prev.next.value!=value){
                prev = prev.next
            }
            let curr = prev.next;
            prev.next = curr.next
        }
        this.size--
    }

    removeFrom(index){
        if(index<0&&index>this.size){
            console.log("Index Out of box");
            return
        }

        if(index===0){
            this.head = this.head.next
            return
        }
        let prev = this.head;
        for(let i=0;i<index-1;i++){
            prev = prev.next;
        }
        let curr = prev.next;
        prev.next = curr.next;
    }
    
    insert(value,index){
        if(index<0&&index>this.size){
            console.log("Out of index");
            return;
        }
        const newNode = new Node(value)
        if(index===0){
            let curr = this.head
            this.head = newNode
            this.head.next = curr
        }else{
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            
            let curr = prev.next
            prev.next = newNode
            newNode.next = curr
        }
        this.size--
    }

    isPalidrom(){
        if(this.head==null){
            return 
        }
        let values=[]
        let curr = this.head;
        while(curr){
            values.push(curr.value)
            curr = curr.next
        }
        let start = 0;
        let end = values.length-1
        while(start<end){
            if(values[start]!=values[end]){
                return false
            }
            start++;
            end--
        }
        return true
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

list.prepend(0)
list.append(1)
list.append(2)
list.append(3)
list.append(2)
list.append(1)
list.append(0)
// list.insert(10,0)
console.log(list.isPalidrom());
// list.removeFrom(3)
// list.reverse()    
list.print()


const arr = [1,2,3,4,5,6,7,8]; 
let t = 7;

let leftIndex=0;
let rightIndex = arr.length-1

while(leftIndex<=rightIndex){
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)

    if(arr[middleIndex]===t){
        console.log("target is found,index is",middleIndex);
       return
    }else if(arr[middleIndex]<t){
        leftIndex=middleIndex+1
    }else if(arr[middleIndex]>t){
        rightIndex= middleIndex-1
    }
}