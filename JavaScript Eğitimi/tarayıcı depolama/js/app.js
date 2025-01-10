// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear= document.querySelector("#clear");
// // Inputlar
// const addkey = document.querySelector("#addkey");
// const addvalue = document.querySelector("#addvalue");
// const deletekey =  document.querySelector("#deletekey");


// add.addEventListener( "click",addItem);
// del.addEventListener( "click",deleteItem);
// clear.addEventListener( "click",clearItems );

// function addItem(e){
//     sessionStorage.setItem(addkey.value, addvalue.value);
// }
// function deleteItem(e) {
//     sessionStorage.removeItem(deletekey.value);
// }
// function clearItems(e) {
//     sessionStorage.clear();
//     localStorage.clear();
// }

const text = ["text 1" , "text 2" , "text 3"];

// text olarak yazdırıyor
// localStorage.setItem("text" , JSON.stringify(text));

const value = JSON.parse(localStorage.getItem("text"));
console.log(value);

if(localStorage.getItem("rwerw" === null)){
    console.log("aradığınız veri bulunmuyor")
}
else{
    console.log("aradığınız veri bulunuyor")
}
const button = document.createElement("button");


button.id = "btn";
button.textContent = "sayfa yenilemeyen submit buttonu";
button.className = "btn btn-dark";
const ctn = document.getElementsByClassName("container")[0];

ctn.appendChild(button);

// document.getElementById("btn").addEventListener("submit" , sayfa_yenilenmesin)

// function sayfa_yenilenmesin(e){

//     e.preventDefault();
// }


const input_ekle = document.createElement("input");
input_ekle.id = "ekle";
input_ekle.placeholder = "ekle";
input_ekle.style.width = "100%";
input_ekle.style.marginTop = "2rem";

ctn.appendChild(input_ekle);

const btnekle = document.createElement("button");
btnekle.className = "btn btn-warning";
btnekle.textContent = "ekle";
btnekle.style.marginTop = "1rem";

btnekle.addEventListener("submit" , ekle);

ctn.appendChild(btnekle);

function ekle(e){
    const input_value = document.getElementById("ekle");

    let yazi;

    if(localStorage.getItem("text") === null){
        yazi = [];
    }
    else{
        yazi = JSON.parse(localStorage.getItem("text"))
    }
    yazi.push(input_value);

    localStorage.setItem("text" , JSON.stringify(yazi));

    e.preventDefault();
}













