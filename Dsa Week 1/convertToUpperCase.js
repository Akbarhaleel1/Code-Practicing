
const str = "Hellesorlds";
const middle = Math.floor(str.length / 2);
let result ;
if(str.length%2===0){
    result = str.substring(0,middle-1)+str[middle-1].toUpperCase() + str[middle].toUpperCase() + str.substring(middle+1)
}else{
    result = str.substring(0,middle)+str[middle].toUpperCase()+str.substring(middle+1)
}

console.log(result);









