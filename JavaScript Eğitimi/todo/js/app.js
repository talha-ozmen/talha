// alert("Hello World!");
// var a=10;
// alert(a); 
document.getElementById("java").style.color = "green";


const todoList = document.querySelector(".list-group");

var value;

value = todoList.childNodes;
value = todoList.children;

function bas() {
    value = todoList.children[2].style.color = "red";
}

console.log(value);

const element = document.querySelectorAll(".list-group-item");


// forech kaç tane varsa o kadar tekrarlıyor 4 tane list-group-item var 4 kere tekrarlıyor
element.forEach(
    function(el){
        el.style.color = "red";
    }
);

let element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(
    function(el){
        el.style.color = "green"
        el.style.background = "#ccc"
    }
)

let todoLi = document.querySelector(".list-group");

todoLi.children[2].textContent = "değişti";
todoLi.children[2].style.color = "orange";
todoLi.style.color= "red";

if(!todoLi.textContent()){
    console.log("değişmissssssss")
}
else{
    console.log("degissssmemisis")
}

console.log(todoLi);

