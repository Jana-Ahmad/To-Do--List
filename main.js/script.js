const addTask= document.querySelector("button");
const inputBox = document.querySelector("input");
const tasksList = document.querySelector(".tasks-list")
 addTask.onclick= function addTasks() {
 if (inputBox.value===""){
    alert("you must write a Task");
 }
    else{
let li= document.createElement("li");
li.innerHTML=inputBox.value;
tasksList.appendChild(li); 
let span=document.createElement("span");
span.innerHTML= "\u00d7";
li.appendChild(span)
}
inputBox.value= "";
}

tasksList.addEventListener("click", function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    
},false);
