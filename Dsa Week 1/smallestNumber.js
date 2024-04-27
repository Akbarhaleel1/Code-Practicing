
const arr = [ 13, 3, 52, 32, 1 ]
let s1=arr[0];
let s2=0;
for(let i=0;i<arr.length;i++){
    if(s1>arr[i]){
        s2=s1;
        s1 = arr[i]
    }
}

console.log("Smallest number is",s1);
console.log("Largest number is",s2);