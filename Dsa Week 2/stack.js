
class Stack{
    constructor(){
        this.items = []
    }
    push(item){
        this.items.push(item)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0
    }
    size(){
        return this.size.length
    }
    print(){
        console.log(this.items);
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop()
stack.print()
console.log(stack.peek());
console.log(stack.size());



class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0;
    }
    isEmpty(value){
        return this.head ===null
    }
    append(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.size++
    }

    prepend(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode
        }else{
            let curr = this.head;
            this.head = newNode;
            this.head.next = curr
        }
        this.size++
    }

    remove(index){
        if(this.isEmpty()){
            return null
        }
        if(index===0){
            this.head = this.head.next
        }else{
            let prev = this.head;
            for(let i=1;i<index;i++){
                 prev = prev.next
            }
            let curr = prev.next;
            prev.next = curr.next
        }
    }

   reverse(){
    let prev = null;
    let curr = this.head
    while(curr!==undefined){
        let next = curr.next;
        curr.next = prev;
        prev = curr
        curr = next
    }
   }
    print(){
        let curr = this.head
        for(let i=0;i<this.size;i++){
            if(curr){
                console.log(curr.value);
                curr = curr.next
            }
        }
    }
}

const list = new linkedList();

list.append(10)
list.append(20)
list.append(30)
list.prepend(5)
list.remove(3)
list.reverse()
list.print()
