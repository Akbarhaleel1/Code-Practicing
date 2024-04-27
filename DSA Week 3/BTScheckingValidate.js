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
    
    isValid() {
        const isValidBST = (node, min = -Infinity, max = Infinity) => {
            if (node === null) {
                return true;
            }

            if (node.value <= min || node.value >= max) {
                return false;
            }

            return (
                isValidBST(node.left, min, node.value) &&
                isValidBST(node.right, node.value, max)
            );
        };

        return isValidBST(this.root);
    }
}



const tree1 = new binerySearchTree();

tree1.insert(10)
tree1.insert(12)
tree1.insert(14)
tree1.insert(6)
log(tree1.isValid())
log(tree1.insert(143))
