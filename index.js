console.log("Hello JavaScript");
let a=10;
let b=20;
console.log(a+b);
let c="Hello";
console.log(c);

// If Else statement

let num=500;
if(num%10==0){
    console.log("Good");
}else{
    console.log("Bad");
}

//else-if Statement
var n1=100;
var n2=150;
var n3=800;
if(n1>n2 && n1>n3){
    console.log(n1);
}
else if(n2>n1 && n2>n3){
    console.log(n2);
}else{
    console.log(n3);
}

//Promtpt and alert
// var userName=prompt("Enter your Name");
// var age=prompt("Enter Your age");
// //template literals
// alert(`${userName} is  ${age} years old `);


//Switch statement
var n=4;
switch(n){
case 1:
console.log("January, Febrary, March");
break;

case 2:
    console.log("April, May, June");
    break;
    case 3:
    console.log("july, Augest, September");
    break;
case 4:
    console.log("October, November, December");
    break;
    default:
        console.log("Invalid Number")
}

//Logical opertaors
var str="abjdjhcz"
if((str[0]==='A' || str[0]==='a') && (str.length>5)){
    console.log("Golden String");
}else{
    console.log("Not Golden String");
}


//Q-6
var num1=3552;
var num2=47852;
if((num1 % 10) === (num2 % 10)){
console.log("number have same last digit");
}else{
console.log("Not same digit");
}