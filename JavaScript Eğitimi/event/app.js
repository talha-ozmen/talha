// const filterinput = document.getElementById("todo");

// const todoform = document.getElementById("todo-form");

// todoform.addEventListener("submit" , submit_form);
// function submit_form(e){
//     console.log("submit eventi")
// }

  
// // focus olunca console loga alttakileri yazdırıyor
// filterinput.addEventListener("focus", function(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
// })

// // klavye ile 

// // keypress 
// // keypress sadece harfleri ve sayıları yazdırır
// // document.addEventListener("keypress",run);

// // function run(e){

// //     console.log(e.which); // asci tablosuna göre yazdırır
// //     console.log(e.key); // bastığı tuşu yazdırır

// // }

// // keydown 
// // keydown bastığı anda yazdırır
// document.addEventListener("keypress",run);

// function run(e){

//     console.log(e.key); // bastığı tuşu yazdırır

// }

// // keyup
// // keyup basmayı bıraktığı anda yazdırır
// // document.addEventListener("keypress",run);

// // function run(e){

// //     console.log(e.key); // bastığı tuşu yazdırır

// // }

const baslik = document.querySelector("#tasks-title");

// double click == dblclick
// baslik.addEventListener("dblclick" , tiklama);

// function tiklama(e){
//     console.log(e.type);
//     console.log("çift tıklandı");
//     console.log("-----------------------")
// }

// -------------------------------

baslik.addEventListener("mouseup" , ma);

function ma(e){
    console.log(e.type);
    
    console.log("-----------------------")
}