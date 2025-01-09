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
element.forEach(
    function (el) {
        el.style.color = "red";
    }
);

let element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(
    function (el) {
        el.style.color = "green"
        el.style.background = "#ccc"
    }
)


// forech kaç tane varsa o kadar tekrarlıyor 4 tane list-group-item var 4 kere tekrarlıyor


let todoLi = document.querySelector(".list-group");


console.log(todoLi);

let cardbody = document.getElementsByClassName("card-body")[1];

const newLink = document.createElement("a");
newLink.className = "btn btn-warning text-light";
newLink.target = "_blank";
newLink.id = "clear-todos";
newLink.onclick = test;

// elementin içinde başka a div gibi elemtler varsa textcontent onları sileer
// newLink.textContent = "bu js ile oluştu"

const text = document.createTextNode("Todo Arayın"); //textnode ile yazıldı

newLink.appendChild(text);
// newLink.appendChild(document.createTextNode("böylede yazılabiliyor"));

cardbody.appendChild(newLink);

// newLink.style.border = "1px solid black"

console.log(newLink);

const todogrup = document.getElementsByClassName("list-group")[0];



function todoekleme() {
    if (todogrup.textContent == "Hepsi Başarıyla Silindi") {
        todogrup.textContent = "";
    }
    const newtodo = document.createElement("li");
    newtodo.classList = "list-group-item d-flex justify-content-between";

    const todoyazi = document.getElementById("todo").value;

    newtodo.append(document.createTextNode(todoyazi));
    todogrup.appendChild(newtodo);

    console.log(newtodo);


    const element = document.querySelectorAll(".list-group-item");
    element.forEach(
        function (el) {
            el.style.color = "red";
        }
    );

    let element2 = document.querySelectorAll("li:nth-child(even)");

    element2.forEach(
        function (el) {
            el.style.color = "green"
            el.style.background = "#ccc"
        }
    )

}
const btntodoekle = document.getElementById("todoekle");

function todosilme() {
    todogrup.textContent = "Hepsi Başarıyla Silindi";
    todogrup.style.color = "green";
}


function test() {
    const todoaramakutusu = document.getElementById("filter").value.toLowerCase();  // Arama kutusunun değeri
    const todoara = document.getElementsByClassName("list-group-item");  // Liste öğeleri

    
    if (todoaramakutusu === "") {
        Array.from(todoara).forEach(function(el) {
            el.classList.remove("d-none");
            el.classList.add("d-flex");
        });
    }

    else {
        Array.from(todoara).forEach(function(el) {
            const todotext = el.textContent.toLowerCase();

            if (todotext.includes(todoaramakutusu)) {
                console.log("Eşleşen öğe bulundu: ", el.textContent);
                el.classList.remove("d-none");
                el.classList.add("d-flex");
            }
            else {
                el.classList.remove("d-flex");
                el.classList.add("d-none");
            }
        });
    }
}
cardbody = document.querySelectorAll(".card-body")[1]; 
const yeniElement = document.createElement("h3");

yeniElement.className = "card-title";
yeniElement.id = "tasks-title";
yeniElement.textContent = "Yeni Todolar..";

// -------------------------------

const eskielement = document.querySelector("#tasks-title");

cardbody.replaceChild(yeniElement , eskielement);

console.log(yeniElement);


/*
function test() {
    const todoaramakutusu = document.getElementById("filter").value.toLowerCase();
    const todoara = document.getElementsByClassName("list-group-item");
    
    Array.from(todoara).forEach(function(el) {
        const todotext = el.textContent.toLowerCase();
    
        if (todotext.includes(todoaramakutusu)) {
            console.log("Eşleşen öğe bulundu: ", el.textContent);
            el.style.display = "block"; // Görünür yap
        } 
        else {
            el.style.display = "none"; // Gizle
        }
    });
}

*/


// --------------------
