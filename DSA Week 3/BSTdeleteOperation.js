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

    findMinNode(value){
        let current = this.root;
        while(current&&current.left!=null){
            current = current.left
        }
        return current
    }
    deleteNode(node, value) {
        if (node === null) {
            return null; // Return null to indicate that nothing was deleted
        } else if (value < node.value) {
            node.left = this.deleteNode(node.left, value); // Update left child
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value); // Update right child
        } else { // Node found
            if (node.left == null) {
                return node.right;
            } else if (node.right == null) {
                return node.left;
            }
            // Node with two children: Get the inorder successor (smallest in the right subtree)
            let tempNode = this.findMinNode(node.right);
            node.value = tempNode.value; // Replace node value with its inorder successor's value
            node.right = this.deleteNode(node.right, tempNode.value); // Delete the inorder successor
        }
        return node; // Return the (possibly updated) node
    }
    
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

}



const tree1 = new binerySearchTree();

tree1.insert(10)
tree1.insert(12)
tree1.insert(14)
tree1.insert(6)
tree1.delete(20);
log(tree1.insert(143))