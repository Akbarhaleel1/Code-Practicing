
//revers array



// const { json } = require("express")
// const { resolve, reject } = require("promise")

// var i, j, temp;
// var a = [1, 2, 3, 4, 5];

// for (i = 0, j = a.length - 1; i < j; i++, j--) {
//     temp = a[i];
//     a[i] = a[j];
//     a[j] = temp;
// }

// console.log(a);


//Reveresed an String array using reverse method

// var a = ['a','b','c','d','e'];
// a.reverse();

// console.log(a);



// reversed Array Using spread Operator

// let array = [1, 2, 3, 4, 5];
// let revesedArray = [...array]

// console.log(revesedArray);



// calculate Sum using reduce method

// let array = [1, 2, 3, 4, 5];

// const NewArray =  array.reduce((total,value)=>total+value,0)
// console.log(NewArray);


//odd number using for loop


// let i,j;
// let array = [1, 2, 3, 4, 5];

// for(i=0;i<=array.length-1;i++){
//     if(array[i]%2!=0){
//         console.log(array[i]);
//     }
// }



//odd number using array methods

// let i,j;
// let array = [1, 2, 3, 4, 5];

// const arr = array.filter((odd)=>odd%2===1);
// console.log(arr);



// let i,j;
// let array = [1, 2, 3, 4, 5];

// const arr = array.filter((odd)=>odd%2===1);
// console.log(arr);

// const NewArray = array.reduce(total,value)=>{}





// find largest using reduce

// let array = [1, 2, 3, 4, 5,8,11,14];
// const arr = array.filter((odd) => odd %2 == 1);
// console.log(arr);



// let largestNumber = arr.reduce((max, current) => 
//      current > max ? current : max
//   );
//   console.log("Largest Number:", largestNumber);



// rest

// const glbalPlayer= ["Akbar","Aravidh","Anandhu"];

// const [first,second,...rest]= glbalPlayer;
// console.log(first,second);
// console.log(rest);



// foreach


// const arr=[1,2,3,4,5,6];

// arr.forEach((value)=>{
//     console.log(value);
// })


// Anonymous function


// const myFunc = function(){
//     console.log("Hii");
// }

// myFunc()



// formap

// let myArray = [1,2,3,4,5,6];

// let arr = myArray.map((e)=>e*2);

// console.log(arr);



// filter

// let myArray = [1,2,3,4,5,6];

// const arr = myArray.filter((e)=>e%2==0);
// console.log(arr);


// find

// let myArray = [1,2,3,4,5,6];

// const arr = myArray.find((e)=>e%2==0);

// console.log(arr);


// sort

// let myArray = [1,2,3,4,5,6];

// const arr = myArray.sort((a,b)=>b-a)

// console.log(arr);


// forOfloop


// let myArray = [1,2,3,4,5,6];

// for(let val of myArray){
//     console.log(val);
// }



// forinloop

// const person = {
//     name:"Akbar haleel",
//     age:19,
//     place:"Nedumangadu"
// }

// for(let val in person){
//     if(val==="place")
//     console.log(person[val]);
// }



// push

// const myArray= [1,2,3,4,5,6,7,8];

// myArray.push(9,10)

// console.log(myArray);



// pop

// let myArray = [1, 2, 3, 4, 5, 6,7,8];

// const arr = myArray.pop();
// console.log(arr);


// shift


// let myArray = [1, 2, 3, 4, 5, 6];

// const arr = myArray.shift()

// console.log(arr);


//unshift

// let myArray = [1, 2, 3, 4, 5, 6];

// myArray.unshift(0);
// console.log(myArray);


// concat

// var myArray1 = [1, 2, 3];
// var myArray2 = [4, 5, 6];

// const NewArray = myArray1.concat(myArray2)

// console.log(NewArray);



// slice


// const myArray = [1,2,3,4,5,6,7,8];

// const newArray = myArray.slice(2);

// console.log(newArray);


// splice


// const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

// myArray.splice(4, 4,10,20);

// console.log(myArray);




// this

// function getName(){
//     console.log(this.name);
//     console.log(this.age);
// }

// const person1 ={
//     name:"Akbar haleel",
//     age:10
    
// }

// const person2 ={
//     name:"Ahamed haleel",
//     age:20
// }

// getName.call(person1)



// this using consuctuer $ bind  

// class User {
//     constructor(){
//         this.name="Akbar";
//     }

//     getName(){
//         return this.name;
//     }
// }

// const user = new User()

// const newUser = user.getName.bind(user);



// console.log(newUser());



// generator

// function* numberGenerator(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// const generator = numberGenerator();

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);






// generator using multiply


// function* multiplyGenerator(){
//     let result = 1;

//     yield result;

//     while(true){
//         result *= yield result;
//     }
// }

// const multiplier = multiplyGenerator();

// console.log(multiplier.next().value);
// console.log(multiplier.next(2).value);
// console.log(multiplier.next(3).value);
// console.log(multiplier.next(4).value);





// generator using evenNumbers


// function* evenNumberGenerator() {
//     let current = 0;
  
//     while (true) {
//       yield (current += 2);
//     }
//   }

//   // Create an instance of the generator
//   const evenGenerator = evenNumberGenerator();
  
//   // Generate and print even numbers
//   console.log(evenGenerator.next().value); // Output: 2
//   console.log(evenGenerator.next().value); // Output: 4
//   console.log(evenGenerator.next().value); // Output: 6
//   console.log(evenGenerator.next().value); // Output: 8
//   console.log(evenGenerator.next().value); // Output: 10
 
  


// Promise


// const myPromise = new Promise((resolve, reject) => {
//   resolve("hello");
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });




// promise add,multiply,divition 



// const promise = require('promise');

// function add(num1, num2) {
//     return new promise((resolve, reject) => {
//         if (num1 == 0) {
//             reject("error");
//         }
//         resolve(num1 + num2);
//     });
// }

// function multiply(num1, num2) {
//     return new promise((resolve, reject) => {
//         if (num1 == 0) {
//             reject("error");
//         }
//         resolve(num1 * num2);
//     });
// }

// function div(num1, num2) {
//     return new promise((resolve, reject) => {
//         if (num1 == 0) {
//             reject("error");
//         }-
//         resolve(num1 / num2);
//     });
// }

// add(10, 20)
//     .then((sum) => {
//         console.log(sum);
//         return multiply(sum, sum);
//     })
//     .then((product) => {
//         console.log(product);
//         return div(product, 10);
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



// duplicate elemetns 

// const a=[1,2,3,4,5,1,2];
// let count=0
// for(let i = 0;i<=a.length-1;i++){
//     for(let j=i+1;j<=a.length;j++){
//         if(a[i]==a[j]){
//              count++;
//         }
//     }
// }

// console.log(count);


// unique elements 

// const a = [1, 2, 3, 4, 5, 1, 2];
// let count = 0;

// for (let i = 0; i < a.length; i++) {
//     count = 0;
//     for (let j = 0; j < a.length; j++) {
//         if (i !== j && a[i] === a[j]) {
//             count=1;
//             break
//         }
//     }
//     if (count == 0) {
//         console.log(a[i]);
//     }


//Reversing array

// const a=[1,2,3,4,5,6];

// for(let i=a.length-1;i>=0;i--){
//     console.log(a[i]);
// }


// currying

// function multiplication(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }

// console.log(multiplication(2)(2)(2));




// Hoisting

// myFunc();

// function myFunc(){
//     console.log("Hello");
// }




// optional chining

// const person = {
//     name: 'John',
//     address: {
//       city: 'New York',
//       zipCode: '10001'
//     }
//   };

  
// const zipCode = person.address?.place

// console.log(zipCode);



// shallow copy

// const original = {numbers: [1,2,3]};

// const shallowCopy = {...original};   

// shallowCopy.numbers.push(4,5,6)


// console.log(shallowCopy.numbers);
// console.log(original.numbers);



// DeepCopy

// const original = {numbers:[1,2,3]}

// const deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.numbers.push(4);


// console.log(original.numbers);



// const myPromise = new Promise ((resolve,reject)=>{
//         resolve("Hello")
// })


// myPromise
//      .then((value)=>{
//         console.log(value);
//      })
//      .catch((err)=>{
//         console.log(err);
//      })


// Promise using feching data


// const FechData = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const data = {message:"Data Feched Successfully"};

//             resolve(data);
//         },2000 )
//     })
// }


// FechData()
//      .then((result)=>{
//         console.log(result.message);
//      })
//      .catch((err)=>{
//         console.log(err);;
//      })




// Fetching data using async await




// const FechData = () =>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{

//         const data = {message : "Data feched successfully"}

//             resolve(data)
//         },2000)
//     })
// }


// async function fechDataAsync(){
//     try{
//         const result = await FechData();

//         console.log(result.message);
//     } catch (error){
//         console.log(error);
//     }
// }


// fechDataAsync();




//Promise all



// const promise1 = Promise(resolve(1))
// const promise2 = Promise(resolve(2))
// const promise3 = Promise(resolve(3))

// Promise.all([promise1,promise2,promise3])
//       .then(values=>{
//         console.log(values);
//       })
//       .catch((error=>{
//         console.log(error);
//       }))




//Class and consucter


// class myClass{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         console.log(`Hi , I am ${this.name} and ${this.age}`);
//     }
// }

// const person = new myClass('Alice',25)



//Anonymouse Function

// const add = function (a,b){
//     return a+b;
// }

// console.log(add(10,30));



// IIFE

// (function(){ 
//    console.log('Hello');
// })();



// Template literels


// let name = "John";
// let greeting = `Hello, ${name}!`;

// console.log(greeting);


// call back function

// function myFunc(callback){
//     setTimeout(()=>{
//         console.log("Async Operation compleated");
//         callback()
//     },2000)
// }   


// function onComplete(){
//     console.log("Call back function executed");
// }


// myFunc(onComplete)


// object freeze


// const myObj = {
//     name:"Akbar",
//     age:19
// }

// Object.freeze(myObj)
// myObj.name="Ahamed"
// console.log(myObj.name);



// Obj seal


// const myObj = {
//     name:"Akbar",
//     age:19
// }

// Object.seal(myObj)
// myObj.name="Ahamed"
// console.log(myObj.name);




// SetTimeout


// setInterval(()=>{
//     console.log("Hii");
// },3000)




//Evennt handling


// const myButton = document.getElementById("myButton");

// myButton.addEventListener('click',()=>{
//     alert("Button Clicked")
// })


// fibonacci 
// function fibonacci(n){
//     let arr=[0,1];
//     for(let i=2;i<n;i++){
//             arr[i]=arr[i-1]+arr[i-2]
//         }
//         return arr
//     }
// console.log(fibonacci(3));



// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }


// class LinkdinList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0
//     }

//     isEmpty(value){
//         return this.head === null
//     }

//     getSize(){
//         return  this.size
//     }

//     append(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             let prev = this.tail;
//             this.tail = newNode;
//             prev.next = newNode
//         }
//         this.size++;
//     }

//     prepend(val){
//         const newNode = new Node(val);
//         if(this.isEmpty()){
//             this.head = newNode;
//             this.tail = newNode
//         }else{
//             let prev = this.head;
//             this.head = newNode
//             newNode.next = prev
//         }
//         this.size++
//     }
//      insert(value,index){
//         const newNode = new Node(value)
//          if(index<0&&index>this.getSize){
//             console.log("Out of index");
//             return
//          }
//          if(index===0){
//             let curr = this.head;
//             this.head = newNode;
//             this.head.next = curr
//             this.size++
//             return 
//          }

//          let prev= this.head;
//          for(let i=1;i<index;i++){
//             prev = prev.next
//          }
    
//             newNode.next = prev.next;
//             prev.next = newNode
//             this.size++
     
//          this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             return null
//         }
//         let current = this.head
//         while(current){
//             console.log(current.value);
//             current = current.next
//          }
//     }
// }



// const list = new LinkdinList();

// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// list.insert(10,4)
// console.log("Size is",list.getSize());
// list.print()




// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.head === null
//     }
//     getSize(){
//         return this.size
//     }

//     append(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode
//             this.tail = newNode;
            
//         }
//         this.size++;
//     }
    
//     prepend(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.head = newNode;
//             this.tail = newNode
//         }else{
//             newNode.next = this.head;
//             this.head = newNode
//         }
//         this.size++
//     }

//     insert(value,index){
//         const newNode = new Node(value)
//         if(index<0||index>this.size){
//             console.log("Index is out of box");
//             return
//         }
//         if(index===0){
//             this.prepend(value)
            
//             return
//         }
//         let prev= this.head;
//         for(let i=1;i<index;i++){
//             prev = prev.next
//         }
//         let current = prev.next;
//         prev.next = newNode
//         newNode.next = current
//         this.size++
//     }

//     removeFrom(index){
//         if(index<0||index>this.size){
//             console.log("Out of index");
//             return 
//         }
//         if(this.isEmpty()){
//             return -1
//         }
//         if(index===0){
//             this.head = this.head.next
//             this.size--
//             return
//         }
//         let prev = this.head
//        for(let i=1;i<index;i++){
//         prev = prev.next
//        }
//       let removeValue = prev.next;
//       prev.next = removeValue.next
//       this.size--
//     }
  
//     search(value) {
//         if (this.isEmpty()) {
//             return false;
//         }
//         let curr = this.head;
//         while (curr) {
//             if (curr.value === value) {
//                 return true;
//             }
//             curr = curr.next;
//         }
//         return false;
//     }

//     deleteMiddle(){
//         let middleIndex = Math.floor(this.size/2)
//         console.log("middle number is ",middleIndex);
//         let prev = this.head;
//         for(let i=1;i<middleIndex-1;i++){
//             prev = prev.next
//         }
//         let removedValue = prev.next;
//         prev.next = removedValue.next
//         this.size--
//     }

//     print(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.value);
//             curr = curr.next
//         }
//     }
// }


// const list = new linkedList();
// list.append(3)
// list.append(4)
// list.append(5)
// // list.append(6)
// list.prepend(2)
// list.prepend(1)
// list.insert(43,3)
// // list.removeFrom(3)
// // list.removeValue(3)
// list.deleteMiddle()
// console.log(list.search(6));
// list.print()
// console.log("Size is",list.getSize());






// const arr = [[1, 2], [3, 4, 5], [6]];
// let index=0
// let newArray=[]
// for(let i=0;i<arr.length;i++){
//     let temp = arr[i]
//     for(let j=0;j<temp.length;j++){
//      newArray[index]=temp[j]
//      index++
//     }
// }

// console.log(newArray);



// // Normal array convert into jaggedArray
// const arr = [1, 2, 3, 4, 5, 6];
// const jaggedArray = [];

// for(let i = 0;i<arr.length;i+=2){
//     jaggedArray.push(arr.slice(i,i+2))
// }

// console.log(jaggedArray);



// // fibonocci
// function fib(n){
//     let result = [0,1]
//     for(let i=2;i<n;i++){
//         result[i]= result[i-1]+result[i-2];
//     }
//     return result
// }



// console.log(fib(2));
// console.log(fib(3));
// // console.log(fib(14));




// // string reverse 
// function reverseString(value){
//     let string = value.split('')
//     for(let i=0;i<string.length/2;i++){
//         let temp = string[i]
//         string[i] = string[string.length-i-1]
//         string[string.length-i-1] = temp
//     }
//     return string.join('')
   
// }   

// console.log(reverseString("hello"));






// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }


// class linkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.head === null
//     }

//     getSize(){
//         return this.size
//     }

//     // append(value){
//     //     const newNode = new Node(value);
//     //     if(this.isEmpty()){
//     //         this.head = newNode;
//     //         this.tail = newNode
//     //     }else{
//     //         let prev = this.head;
//     //         while(prev.next){
//     //             prev = prev.next;  
//     //         }     
//     //         prev.next = newNode;
            
//     //     }
//     // }

//     append(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.head = newNode;
//             this.tail = newNode
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode
//         }
//         this.size++
//     }

//     prepend(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.head = newNode;
//             this.tail = newNode
//         }else{
//             let temp = this.head;
//             this.head = newNode
//             newNode.next = temp
//         }
//         this.size++
//     }

//     removeFrom(index){
//         if(index<0||index>this.size||index==null){
//             console.log("Out of index");
//             return 
//         }
//         if(this.isEmpty()){
//             return null
//         }

//         if(index===0){
//             this.head = this.head.next
//             this.size--
//             return
//         }

//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev = prev.next
//         }
//         let curr = prev.next;
//         prev.next = curr.next
//         this.size--
//     }

//     print(){
//         if(this.isEmpty()){
//             return null
//         }
//         let current = this.head;
//         while(current){
//             console.log(current.value);
//             current = current.next
//         }
        
//     }
// }

// const list = new linkedList();
// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(11)
// list.removeFrom()
// console.log("size is",list.getSize());
// list.print()





class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.head===null;
    }

    getSize(){
        return this.size;
    }

    append(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let temp = this.tail;
            temp.next = newNode
            this.tail = newNode;
        }
        this.size++
    }
    prepend(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let curr = this.head
            this.head = newNode;
            this.head.next = curr
        }
        this.size++
    }

    removeFrom(index){
        if(index<0||index>=this.size){
            console.log("Out of index");
            return 
        }
        if(index===0){
            this.head = this.head.next
        }else{
            let prev=this.head
            for(let i=1;i<index;i++){
                prev = prev.next
            }
            let current = prev.next;
            prev.next = current.next
        }
        this.size--
    }
    removeValue(value){
        if(this.head.value==value){
            this.head = this.head.next
        }else{
            let prev= this.head;
            while(prev.next){
                if(prev.next.value!==value){
                    prev = prev.next
                }else{
                    prev.next= prev.next.next
                }
            }
        }
    }

    search(value){
        if(this.isEmpty()){
            return "Empty"
        }
        let curr = this.head
        let i =0
        while(curr){
            if(curr.value === value){
                return true 
            }
            curr =  curr.next
            i++
        }
     return false
    }
  
    search(){
        if(this.isEmpty()){
            
        }
    }
    
    print(){
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }
}


const list = new linkedList();
list.prepend(9)
list.prepend(8)
list.append(10)
list.append(11)
list.append(12)
console.log(list.search(11));
list.removeValue(12)
list.print()