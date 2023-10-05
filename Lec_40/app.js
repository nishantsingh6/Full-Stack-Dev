// onclick property

// let btn=document.querySelector("button");
// console.dir(btn);

// btn.onclick=function (){
//     console.log("button was clicked");
// }

// function sayhello(){
//     alert("Button was clicked");
// }
// function sayName(){
//     alert("what's your name ?");
// }

//onmouseenter property

// btn.onmouseenter=sayhello;

//Event Listener

// btn.addEventListener("click" ,function(){
//     console.log("How are you ?");
// });  

// btn.addEventListener("click",sayhello);
// btn.addEventListener("click",sayName);

//Activiy -- Change Color 

// let btn=document.querySelector("button");

// btn.addEventListener("click", function(){
//     //change h2
//     let h2=document.querySelector("h2");
//     let randomColor=getRandom();
//     h2.innerText=randomColor;

//     // Change color of div
//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;
// });


// function getRandom(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
 
//     let color=`rgb(${red}, ${green} , ${blue})`;
//     return color;
// }

// this keyword in Event Listener

// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");


// function color(){
//     console.dir(this.innerText); 
//     this.style.backgroundColor="orange";
// }
// btn.addEventListener("click", color);

// h1.addEventListener("click",color);

// h3.addEventListener("click",color);


//keyboard events

// let inp=document.querySelector("input");

// inp.addEventListener("keydown",function(e){
//     console.log("something is type");
//     console.log(e);
// });


//Form event 

let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault(); 
   let inp=document.querySelector("input");
   console.dir(inp);
   console.log(inp.value);
    
});





