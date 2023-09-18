//this keyword
const student = {
    name:"nishant",
    age: 20,
    eng: 91,
    hindi: 95,
    phy: 80,
    getAvg() {
        console.log(this);
let avg=(this.eng + this.hindi + this.phy) / 3;
console.log(`${this.name} got avg marks = ${avg}`);
    }
};

function getAvg(){
    console.log(this);
}

//try & catch statement
  console.log("Hello");
  console.log("Hello");
  try{
    console.log(a);
  }catch{
    console.log("a define nhi hai be");
  }
  console.log("Hello ji");
  console.log("hello")

  //Miscellaneous Topics

  //Arrow Function
  const sum=(a,b) => {
    console.log(a+b);
  };

  //Find a^3
  const cube=(a) =>{
    console.log(a*a*a);
  };

  const hello=() => {
    console.log("Hello");
  };

  //Implicit return 
  const mul=(a,b) => a*b;

  //SetTimeOut function -- Print only once

  console.log("Hii there");
  setTimeout(() => {
    console.log("Here")
  },4000);
  console.log("Welcome to");

  //Set Interval -- Print multiple times

  // console.log("Hello world");
  // let id= setInterval(() => {
  //   console.log("How are you");
  // },2000);
  // console.log("fine");

  // console.log(id);


  // clearInterval(id)-- If we want to stop our setInterval we call clear interval 

  // this keyword with Arrow Function

  const person = {
    name:"xyz",
    marks: 90,
    prop:this, //global scope
    getName: function() {
      console.log(this);
     return this.name;
    },
    getMarks : () =>{
      console.log(this);  // parent's scope --> window
      return this.marks;
    },

  };


  //Practice qs
// 1- Write an arrow function that returns the sqaure of a number'n' :
  const square=(n) => (n*n);
  console.log(square(3));

  //2- Write a function that prints"hello world" 5 times at intervals of 2s each

  let id=setInterval(() => {
    console.log("Hello World")
  },2000);
  setTimeout(() =>{
    clearInterval(id)
  },10000);