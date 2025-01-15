const form = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo");
const todolist = document.querySelector(".list-group");
const firstcardbody = document.querySelectorAll(".card-body")[0];
const secondcardbody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearbutton = document.querySelector("#clear-todos");

eventlisteners();
function eventlisteners() {
    form.addEventListener("submit", addtodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondcardbody.addEventListener("click",deleteTodo);
    clearbutton.addEventListener("click",deleteTodoFromStorage)
};

function deleteTodo(e){
    // console.log(e.target); // burada nereye tıklandığını göstericek
    if(e.target.className == "fa fa-remove"){
        console.log("sil");
        e.target.parentElement.parentElement.remove();
        showalert("success","Todonuz Başarılı Bir Şekilde Silindi.")
    }
    
}

function loadAllTodosToUI(){
    let todos = gettodosfromstroge();
    todos.forEach(function(todo) {
        addTodoUI(todo);
    });
}

function addtodo(e) {
    const newtodo = todoinput.value.trim();

    addTodoUI(newtodo);
    addtostorage(newtodo);

    e.preventDefault();
}

function addTodoUI(newtodo) {
    const link = document.createElement("a");
    const listitem = document.createElement("li");

    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"; //bu a'nın içinde i oluşturacak

    listitem.className = "list-group-item d-flex justify-content-between";
    listitem.appendChild(document.createTextNode(newtodo));
    listitem.appendChild(link);

    todoinput.value = ""; // inputa değer girildikten sonra içini boşaltması için
    console.log(newtodo);

    if(newtodo === ""){
        showalert("danger" , "Lütfen Bir Todo Giriniz !");
    }
    else{
        todolist.appendChild(listitem);
        showalert("success" , "Başarılı Bir Şekilde Eklendi .");
    }

}

function showalert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    
    alert.textContent = `${message}`;
    firstcardbody.appendChild(alert);
    
    setTimeout(function(){
        alert.remove();
    }, 1000);
}

function gettodosfromstroge(){
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addtostorage(newtodo){
    let todos = gettodosfromstroge();
    todos.push(newtodo);
    localStorage.setItem("todos" , JSON.stringify(todos));
}

function deleteTodoFromStorage(){
    let todos = gettodosfromstroge();

    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);
        }
    })
}