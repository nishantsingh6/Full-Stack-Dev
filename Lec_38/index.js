// Array Methods

// 1. forEach
let arr=[1,2,3,4,5];
function print(el){
    console.log(el);
}
arr.forEach(print);

// 2. Map
let num=[1,2,3,4,5];
let double=num.map(function(el){
return el*2;
});

// 3.Filter

let nums=[1,2,4,5,8,9,7,6,3,4,7];
let ans=nums.filter((el) => {
    return el%2 ==0; //even -> true, odd-> false;
});

//4. Every-- Same as AND Operator

console.log([2,4,6].every((el) => el%2 ==0)); //true
console.log([2,4,6,1].every((el) => el%2 ==0)); //false

//5. Some -- Same as OR operator
console.log([2,4,6,1].some((el) => el%2 ==0)); //true

//6. Reduce Function

let number=[1,2,3,4,5,6];
let answer=number.reduce((acc,el) => acc+el);
console.log(answer);

//Find max with reduce method
let data=[2,3,4,5,7,8,26,62,9];
let result=data.reduce((max,el) =>{
    if(el > max){
        return Element;
    }else{
        return max;
    }
});
console.log(result);

//Find min value using reduce method -- Only condition change 

//Defalt Parameter
function sum(a,b=4){
    return a+b;
}
console.log(sum(2)); //6

//Spread
let arr1=[1,2,34,68,3,4,3,6,8,8];
console.log(...arr1);

let str="Nishant";
console.log(...str);


//Spread with array literals
let arr2=[1,3,4,5,48,6];
let newarr=[...arr2];
console.log(newarr);
newarr.push(10);
console.log(newarr);

let string="Nishant";
console.log([...string]);

//Spread with Object Literals

const info={
    email:"ironman@gmail.com",
    pass:"abcs",
};
const newinfo={...info,id:123,country:"India"};

// Rest method

function sum(...args){ //arguments
 for(let i=0; i<args.length; i++){
console.log("you gave us:",args[i]);
 }
};

// Destructuring

let names=["tony","bruce","steve","peter"];
let [winner,runnerup]=names;
console.log(winner,runnerup);

// Destructuring with objects

const stundent={
   name:"Aryan",
   age:13,
   class:5,
   subject:["hindi","english","math"],
   username:"aryan@123",
   password:"abcd",
};

let{ username : user, password : secret }=stundent;

