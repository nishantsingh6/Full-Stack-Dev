//String Methods

//trim()
let str="   hello  "
console.log(str);
console.log(str.trim());
console.log(str);

//uppercase and lowercase
console.log(str.toUpperCase().trim());
console.log(str.toLowerCase().trim());

//indexOf
let str2="HelloNishant"
console.log(str2.indexOf("Nishant"));
console.log(str2.indexOf("H"));
console.log(str2.indexOf("j"));

//Slice- Same as substring
console.log(str2.slice(5));
console.log(str2.slice(0,5));
console.log(str2.slice(-5));

//Replace & Repeat
let s="Hero";
let change=s.replace("H","Z");
console.log(change);
console.log(s);
let change2=s.replace("ero","urt");
console.log(change2);

console.log(s.repeat(3));

//Array
let arr=[1,2,3,4,5,6]
console.log(arr);

//Push method
arr.push(7);
arr.push(8);
console.log(arr);

//Pop method
arr.pop();
arr.pop();
console.log(arr);

//Unshift--Add data at index zero
arr.unshift(9);
console.log(arr);


//shift--Delete data from start
arr.shift()
console.log(arr);

//Find the index of value
let idx=arr.indexOf(5);
console.log(idx);

//Include method
console.log(arr.includes(10));
console.log(arr.includes(1));

//concat Method
let arr2=[10,20,30,40,50];
console.log(arr.concat(arr2));

//Reverse method
console.log(arr.reverse());


//Sort method
console.log(arr.sort());


//2d-Array
let arr3=[[1,2],[3,4],[5,6,7]];
console.log(arr3);

//Array reference
let arr1=[1];
let arr4=[1];
console.log([1]===[1]); //false
 
arr1=[1];
let narr=arr1;
narr.push(10);
console.log(arr1===narr); //true