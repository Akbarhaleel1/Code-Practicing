// // Divition Method using sepreateChaining
// class hashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         let bucket = this.table[index];
//         if (!bucket) {
//             this.table[index] = [[key, value]];
//         } else {
//             const itemIndex = bucket.find(item => item[0] === key);
//             if (itemIndex >= 0) {
//                 bucket[itemIndex][1] = value; // Update existing value
//             } else {
//                 bucket.push([key, value]); // Add new key-value pair
//             }
//         }
//     }

//     get(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         if (bucket) {
//             for (let i = 0; i < bucket.length; i++) {
//                 if (bucket[i][0] === key) {
//                     return bucket[i][1]; // Return the value associated with the key
//                 }
//             }
//         }
//         return undefined;
//     }

//     remove(key) {
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if (bucket) {
//             const itemIndex = bucket.findIndex(item => item[0] === key);
//             if (itemIndex >= 0) {
//                 bucket.splice(itemIndex, 1); // Remove the item from the bucket
//             }
//         }
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }

// const table = new hashTable(100);

// table.set("Name", "Akbar");
// table.set("Age", 19);
// table.set("School", "Psnm");
// console.log(table.get("Name")); // Should correctly fetch "Akbar"
// table.remove("School");
// table.display(); // Should display the hash table without "School"



// Divition Method Using linear probing
class hashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key);
            while(this.table[index]!==undefined&&this.table[index]!==key){
                index = (index+1)%this.size
        }
        this.table[index] = [key,value]
    }

    get(key){
        let index = this.hash(key);
        while(this.table[index]!==undefined){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }
            index = (index+1)%this.size
        }
    }
    remove(key){
        let index = this.hash(key);
        let startIndex = index
        while(this.table[index]!== undefined){
            if(this.table[index][0]===key){
                this.table[index]=undefined
                return true
            }
            index = (index+1)% this.size
            if(index===startIndex){
                break
            }
        }
        return false
    }
    display(){
        this.table.forEach((item,index)=>{
            console.log(index,item);
        })
    }
}

const table = new hashTable(100);

table.set("Name","Akbar")
table.set("Age",20)
table.set("School","Psnm")
console.log(table.get("Name"));
table.remove("Age")
table.display()

