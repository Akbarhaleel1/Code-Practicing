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

function areIdentical(tree1,tree2){
    if(tree1==null&&tree2==null){
        return true
    }
    if(tree1==null||tree2==null){
        return false
    }
    if(tree1.value!=tree2.value){
        return false
    }
    return areIdentical(tree1.left,tree2.left)&&areIdentical(tree1.right,tree2.right)
}



const tree1 = new binerySearchTree();
const tree2 = new binerySearchTree();

tree1.insert(10)
tree1.insert(12)
tree1.insert(14)
tree1.insert(6)
tree2.insert(10)
tree2.insert(12)
tree2.insert(14)
tree2.insert(6)


console.log(areIdentical(tree1.root, tree2.root)); 

