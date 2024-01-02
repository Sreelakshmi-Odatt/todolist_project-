//  Author
// Description: This is the Javascript file for the to-do list project 

const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("lists");

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter some tasks");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
li.appendChild(span);
    }
    inputBox.value="";
    storeData();
}

listContainer.addEventListener("click" , function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checkbox");
        storeData(); 
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        storeData();
    }
} , false);

function  storeData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function displayTodo(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayTodo();
