console.log(1);
console.log(2);
console.log(3);

console.log('loops')
//for loop
let n=5;
for(let i=1; i<=n; i++){
console.log(i);
}

//Odd number 1-15
for(let i=1; i<=15; i=i+2){
    console.log(i);
}

//Even Number 2-10
for(let i=2; i<=10; i=i+2){
console.log(i);
}

//Multiply of n number
let num=prompt("enter your number :");
num=parseInt(num);
for(let i=num; i<=num*10; i=i+num){
    console.log(i);
}

//Nested Loop
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}


//While Loop
let i=1;
while( i<= 5){
    console.log(i);
    i++;
}

//for of loop
let fruits=['mango','apple','bnana'];
for(i of fruits){
    console.log(i);
}