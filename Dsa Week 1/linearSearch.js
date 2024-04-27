

function linerSearch(arr,taget){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===taget){
            return i
        }
    }
}

console.log(linerSearch(arr=[1,2,3,4,5],taget=5));



