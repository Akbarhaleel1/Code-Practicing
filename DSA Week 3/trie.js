






class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char]
        }       
         curr.isEndOfWord = true
    }
    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                console.log(word+" is does not exists");
                return false
            }
            node = node.children[char]
        }
        console.log(word+" is exists");
        return node.isEndOfWord
    }

    printWords(node=this.root,currentWord = "",result=[]){
        if(node.isEndOfWord){
            result.push(currentWord)
        }
        
        for(let char in node.children){
            this.printWords(node.children[char],currentWord+char,result)
        }
        return result;
    }

    autoComplete(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }
        
        let list = [];
        this.collectWord(node,word,list)
        return list;
    }

    collectWord(node,word,list){
        if(node.isEndOfWord){
            list.push(word)
        }

        for(let char in node.children){
            this.collectWord(node.children[char],word+char,list)
        }
    }


    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

}

const trie = new Trie();

trie.insert("Akbar haleel");
trie.insert("Easa")
// trie.delete("Easa")
console.log("sss",trie.autoComplete("Akba"));
console.log("Tree words are",trie.printWords());
console.log(trie.search("Easa"));

console.log(trie.startsWith("Ea")); // true
console.log(trie.startsWith("Eas")); // true
console.log(trie.startsWith("Eaa")); 



// function buildMaxHeap(arr){
//     let n = arr.length;
//     for(let i=Math.floor(n/2)-1;i>=0;i--){
//         heapifyDown(arr,n,i)
//     }
//     return arr
// }

// function heapifyDown(arr,n,i){
//     let largest = i;
//     let left = 2*i+1
//     let right = 2*i+2
//     if(left<n&&arr[left]<arr[largest]){
//         largest = left
//     }
//     if(right<n&&arr[right]<arr[largest]){
//         largest = right
//     }
//     if(largest!=i){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapifyDown(arr,n,largest)
//     }
// }


// function heapSort(arr) {
//     let n = arr.length;

//     // Build a max heap
//     buildMaxHeap(arr);

//     // One by one extract elements from heap
//     for (let i = n - 1; i > 0; i--) {
//         // Move current root to end
//         [arr[0], arr[i]] = [arr[i], arr[0]];

//         // call max heapify on the reduced heap
//         heapifyDown(arr, i, 0);
//     }
// }

// // Example usage:
// const arr = [5, 2, 7, 4, 2, 8];
// heapSort(arr);
// console.log(arr); // Should print the sorted array


