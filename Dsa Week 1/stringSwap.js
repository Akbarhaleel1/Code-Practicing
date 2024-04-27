
let string = "Hello World";

const arr = string.split(' ')


    let temp = arr[0]
    arr[0] = arr[1]
    arr[1]=temp

    let arr2= arr.join(' ')
    
    console.log(arr2);
