const arr = [1,2,3,4,5,6,7,8,9];


for(let i=0,j=arr.length-1;i<arr.length/2;i++,j--){
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp
}

console.log(arr);