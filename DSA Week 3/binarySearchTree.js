
// BinarySearchTree
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}
class binarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode
        }else{
             let current = this.root;
             while(true){
                if(value < current.value){
                    if(current.left===null){
                        current.left = newNode
                        return this
                    }else{
                        current = current.left
                    }
                }else{
                    if(current.right===null){
                        current.right = newNode
                        return this
                    }else{
                        current = current.right                      
                    }
                }
             }
        }
    }
    min(node =this.root){
        if(!node.left){
            return node.value;
        }else{
            return this.min(node.left);
        }
    }

    max(node= this.root){
        if(!node.right){
            return node.value
        }else{
            return this.max(node.right)
        }
    }
    
    BFS(){
        let data = [], queue=[];
        let node = this.root;
        queue.push(node)
        while(queue.length){
            node = queue.shift()
            data.push(node.value)
            if(node.left)queue.push(node.left)
            if(node.right)queue.push(node.right)
        }

    return data
    }

    DFSpreOrder(){
        const data = []
        function preOrder(node){
            data.push(node.value);
            if(node.left)preOrder(node.left)
            if(node.right)preOrder(node.right)
        }
    preOrder(this.root)
    return data
    }
    DFSpostOrder(){
        const data = [];
        function postOrder(node){
            if(node.left)postOrder(node.left)
            if(node.right)postOrder(node.right)
            data.push(node.value)
        }
    postOrder(this.root)
    return data
    }
    DFSinOrder(){
        const data = [];
        function inOrder(node){
            if(node.left)inOrder(node.left)
            data.push(node.value)
            if(node.right)inOrder(node.right)
        }
    inOrder(this.root)
    return data
    }
    findHeight(node = this.root){
        if(node == null){
            return -1
        }else{
            let leftHeight = this.findHeight(node.left)
            let rightHeight = this.findHeight(node.right)
            return  Math.max(leftHeight, rightHeight) + 1;
        }
    }
    find(value){
        let current = this.root;
        while(current== null){
            if(current.value===value){
                return true
            }else if(value<current.value){
                current = current.left
            }else{
                current = current.right
            }
        }
        return false
    }
findRecurssive(value){
    let node = this.root;
    function check(node,value){
        if(!node)return false
        if(node.value==value)return true
       return check(node.left,value) || check(node.right,value)
       
    }
return check(node,value);
}


}

const tree = new binarySearchTree();
const tree2 = new binarySearchTree();

tree2.insert(11)
tree.insert(11)
tree2.insert(10)
tree.insert(10)
tree2.insert(1)
tree.insert(1)

console.log(tree.min());
console.log(tree.max()); 
// console.log(tree.BFS());
console.log(tree.DFSpreOrder());
// console.log(tree.DFSpostOrder());
// console.log(tree.DFSinOrder());
console.log(tree.findHeight());
console.log(tree.find(14)); 


function areIdentical(tree1,tree2){
    if(tree1===null&&tree2===null){
        return true
    }
    if(tree1===null||tree2==null){
        return false
    }
    if(tree1.value!=tree2.value){
        return false
    }
    return areIdentical(tree1.left,tree2.left) && areIdentical(tree1.right,tree2.right)
}

console.log(areIdentical(tree,tree2));
