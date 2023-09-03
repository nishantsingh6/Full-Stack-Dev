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


