//Object Literals
const student ={
name:'suresh',
age:14,
rollno :420
};


//creating a twiiter post
let post={
    UserName :"@nishantsingh",
    content :"This is my first post",
    like: 1000,
    retweet: 420,
    tags:["@hashtag","@fistpost"]
};

//Nuumber as a key 
let obj={
1:'a',
2:'b',
3:'c',
true:'abc',
undefined:'random',
null:'zero'
};

//Add & Update & Delete
post.UserName="ram";
post.trend="#viral";
delete post.tags;

//Nested object 
const students = {
    abc: {
        garde : "A+",
        city : "Rajasthan",
    },
    cde: {
        garde : "A",
        city : "pune",
    },
    efg: {
        garde : "B+",
        city: "Delhi",
    }
};

const arr =[ 
    {   name:"abc",
        garde : "A+",
        city : "Rajasthan",
    },
   { name:"cde",
        garde : "A",
        city : "pune",
    },
    {name:"efg", 
        garde : "B+",
        city: "Delhi",
    }
];
