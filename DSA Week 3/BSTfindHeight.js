const { log } = require("console");

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class binerySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            let current = this.root;
            while(true){
                if(value<current.value){
                    if(!current.left){
                        current.left = newNode;
                        return this
                    }else{
                        current = current.left
                    }
                }else{
                    if(!current.right){
                        current.right = newNode;
                        return this
                    }else{
                        current  = current.right
                    }
                }
            }
        }
    }


}



const tree1 = new binerySearchTree();

tree1.insert(10)
tree1.insert(12)
tree1.insert(14)
tree1.insert(6)
log(tree1.insert(143))
log(tree1.findHeight())