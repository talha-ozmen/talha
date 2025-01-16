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
    clearbutton.addEventListener("click",deleteTodoFromStorage);
    // filter.addEventListener("keyup",filterTodos);
    clearbutton.addEventListener("click",clearAllTodos);
};

function clearAllTodos(e){
    if(confirm("tümünü silmek istediğinizden emin misiniz")){
        while(todoslist.firstElementChild != null){
            todoslist.remove(todolist.firstElementChild);
        }
        localStorage.removeItem(todos);
    }
}

function deleteTodo(e){
    // console.log(e.target); // burada nereye tıklandığını göstericek
    if(e.target.className == "fa fa-remove"){
        console.log("sil");
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showalert("success","Todonuz Başarılı Bir Şekilde Silindi.");

    }
}

function filterTodos(e){
    const filtervalue = e.target.value.toLowerCase();
    const listitem = document.querySelectorAll(".list-group-item");

    listitem.forEach(function(listitem){
        const text = listitem.textContent.toLowerCase();
        if(text.indexOf(filtervalue === -1)){
            listitem.setAttribute("style","display: none !important");
        }
        else{
            listitem.setAttribute("style","display: block");
        }
    })

}


function deleteTodoFromStorage(todo){
    let todos = gettodosfromstroge();

    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);
        }
    })
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

/* bu çalışan uygulama

// Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ // Tüm event listenerlar
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);

}
function clearAllTodos(e){
    if (confirm("Tümünü silmek istediğinize emin misiniz ?")) {
        // Arayüzden todoları temizleme
        // todoList.innerHTML = ""; // Yavaş
        while(todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
        
       


    }
    
    



}
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1){
            // Bulamadı
            
            listItem.setAttribute("style","display : none !important");
        }
        else {
            listItem.setAttribute("style","display : block");
        }

        

    });

}
function deleteTodo(e){

    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

        showAlert("success","Todo başarıyla silindi...");

    }

}
function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if (todo === deletetodo){
            todos.splice(index,1); // Arrayden değeri silebiliriz.
        }

    });

    localStorage.setItem("todos",JSON.stringify(todos));

}
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);


    })

}
function addTodo(e){
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        
        showAlert("danger","Lütfen bir todo girin...");
    }
    else {
        addTodoToUI(newTodo); 
        addTodoToStorage(newTodo);

        showAlert("success","Todo başarıyla eklendi...");

    }
    




    e.preventDefault();

}
function getTodosFromStorage(){ // Storagedan Todoları Alma
    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    return todos;


}
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));



}
function showAlert(type,message){
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;

    alert.textContent = message;

    firstCardBody.appendChild(alert);

    // setTimeout

    setTimeout(function(){
        alert.remove();

    },1000);



}
function addTodoToUI(newTodo){ // String değerini list item olarak UI'ya ekleyecek.
   // List Item Oluşturma
   const listItem = document.createElement("li");
   // Link oluşturma
   const link = document.createElement("a");
   link.href = "#";
   link.className = "delete-item";
   link.innerHTML = "<i class = 'fa fa-remove'></i>";

   listItem.className = "list-group-item d-flex justify-content-between";

   // Text Node Ekleme

   listItem.appendChild(document.createTextNode(newTodo));
   listItem.appendChild(link);

   // Todo List'e List Item'ı ekleme

   todoList.appendChild(listItem);
   todoInput.value = "";


   


}





*/