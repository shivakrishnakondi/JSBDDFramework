
//About Variables
console.log('Hello, Ai era');
console.log('Am starting JS with whole hearted')

let greet = "welcome!" , greet1 = "Am good in testing"
console.log(greet, greet1);

let val = 9
val="twelve";
console.log(val); 

const APP_URL="https://abce.com"
//APP_URL = "fsdfgs.com"
console.log(APP_URL) 

//datTypes and Literals 

/*
String
boolean
number
Object
Array
Undefined or null
RegularExperession(Regexp)
*/ 
//String

let str = 'jaan'
let str1="bunty"
let str2 = `${str},raan`
console.log(str2) 

//boolean
let bool = true

//Array 
let arr = []
//number
let num = 20
let num1 = 50.4
//Object
let obj = {}
//Regexp
let  re = /abc/
//Undefined null
let val1
let tempObj = num

console.log(`the type of str1 is : ${typeof str1}`);
console.log(`the type of number is : ${typeof num1}`);
console.log(`the type of boolean is : ${typeof bool}`);
console.log(`the type of Object is : ${typeof obj}`);
console.log(`the type of Array is : ${typeof arr}`);
console.log(`the type of regexp is : ${typeof re}`);
console.log(`the type of Undefined is : ${typeof val1}`);
console.log(`the type of null is : ${typeof tempObj}`);


//switch case

let browser = "firfox"
switch (browser){
    case "chrome":
        console.log('Running chrome browser')
        break;
    case "firfox":
        console.log('Running firofox browser')
        break;
    case "edge":
        console.log('Running edge browser')
        break;
    default :
        console.log(`No valid browser: ${browser} is provided`)
}

//Array loop 

let array = ["apple",9,"bat","cat",78,32,"banana"]
let sum = 0;
for(let i =0;i<array.length;i++){
    let arrEle = array[i];
    // if(typeof arrEle === "number"){
    //     sum += arrEle;
    // }
    if(typeof arrEle !== "number")continue; 
        sum += arrEle;  
}
console.log(`the value of sum : ${sum}`)

//foreach loop 

let windows = ["google","chrome","edge","amazon"]
//syntax of function in js
//() => {}
    windows.forEach((val, index, arr) => { 
        console.log(val);
        console.log(index);
        console.log(arr);
    });