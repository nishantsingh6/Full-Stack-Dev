function print(){
    console.log("Hello Function");
}

// print();

function num(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}

// num();

//Dice Print
function dice(){
 let rand=  Math.floor(Math.random() *6 )+1;
 console.log(rand);
}

dice();

//Function with argument

function printInfo(name,age){
    console.log(name,age);
}
printInfo("Nishant",20);

//Sum of two number
function sum(a,b){
    console.log(a+b);
}
sum(10,20);

//print average 
function avg(a,b,c){
    console.log((a+b+c)/3);
}
avg(2,4,6);


//return keyword 
function sum2(a,b){
    return a+b;
}
sum(5,5);  

//Sum of numbers 1 to n;
function getsum(n){
    let sum=0;
    for(let i=0; i<=n; i++){
        sum=sum+i;
    }
    return sum;
}

console.log(getsum(3));

//Scope

let greet="hello"; //global scope
function changeGreet(){
    let greet="namaste"; //function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);  //lexical scope
    }
}
console.log(greet);
changeGreet();

//function expression
let sum=function(a,b){
    return a+b;
}