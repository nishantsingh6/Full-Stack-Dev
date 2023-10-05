let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let task=document.createElement("li");
    task.innerText=inp.value;
    ul.appendChild(task);
    inp.value="";

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete"
    delbtn.classList.add("delete");

   task.appendChild(delbtn);
   ul.appendChild(task);
   inp.value="";
});

ul.addEventListener("click",function(event){
 if(event.target.nodeName == "BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
 }
});

// let dlt=document.querySelectorAll(".delete");
// for(delbtn of dlt){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// };