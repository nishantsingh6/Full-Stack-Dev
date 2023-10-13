//Call Stack

// function hello(){
//     console.log("hello ");
// }
// function demo(){
//     hello();
//     console.log("world");
// }

// demo();

// Js is a single threaded

let a=10;
console.log(a);
let b=20;
console.log(b);
console.log(a+b);

setTimeout(function(){
    console.log("world");
},2000);

console.log("Hello");

//CallBack hell

h1=document.querySelector("h1");
function changeColor(color,delay,nextColor){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColor) nextColor();
    },delay);
}
//Nesting
changeColor("red",1000,()=>{
    changeColor("orange",1000, ()=>{
   changeColor("brown",1000);
    });
});

// Promises
function saveDb(data){
    return new Promise((resolve,reject) => {
        let internetSpeed=Math.floor(Math.random() *10)+1;
        if(internetSpeed>4){
            resolve("success: data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}

//saveDb("hello world");