class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.size = 0;
    }
}

class linkedList{
    constructor(){
        this.head = null
    }
    isEmpty(){
        return this.head===null;
    }
    append(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head=newNode
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next
            }
            curr.next = newNode
        }
    }
    prepend(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head= newNode
        }else{
            let curr = this.head;
            this.head = newNode;
            this.head.next = curr
        }
    }
    removeValue(value){
        if(this.head.value==value){
            this.head = this.head.next
            
        }else{
            let prev = this.head;
            while(!prev.next.value==value){
                prev = prev.next
            }
            let curr = prev.next;
            prev.next = newNode;
            prev.next.next = curr
        }
         this.size--;
    }
    display(){
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }
}

const list = new linkedList();
list.append(30)
list.append(33)
list.append(35)
list.append(38)
list.prepend(5)
list.prepend(78)
list.removeValue(35)

list.display()