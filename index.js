const container=document.getElementById("input-container1")
const todoItem1=container.children[1];
const todoItem2=container.children[4];
const Todocontainer=document.getElementById("Todo-Container1")


function addTodo(){
   
    let todoText=todoItem1.value.trim();
    let time=todoItem2.value;

   

    let div=document.createElement("div");
    div.className="Todo-Item"

    let b=document.createElement("b")
    let span=document.createElement("span")

    b.innerText=todoText;
    span.innerText=time;

    if(todoText && time){
       div.appendChild(b)
       div.appendChild(span)
       Todocontainer.appendChild(div)
    }
}