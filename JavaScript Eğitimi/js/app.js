// alert("Hello World!");
// var a=10;
// alert(a); 
document.getElementById("java").style.color = "green";


const todoList = document.querySelector(".list-group");

var value ;

value = todoList.childNodes;
value = todoList.children;

function bas(){
    value = todoList.children[2].style.color = "red";
}

console.log(value);




// consta 1 kere aynı satırda tanımlanması gerekiyor
const a = 10; // doğrusu
// const b; //yanlışı
// b = 20;
console.log(a);

// ama
const c = [1 , 2 , 3 , 4 , 5]
console.log(c);

c.push(6); // buda doğrudur 
console.log(c);


// konsolu siler
console.clear();


var d = 7777777;
console.log(d);
console.log(typeof d);

var d = String(7777777);

console.log(d);
console.log(typeof d);


var d = Number(7777777);

console.log(d);
console.log(typeof d);


var e = parseFloat(3.14);

console.log(e);
console.log(typeof d);


var e = parseFloat(3.14);

console.log(e);
console.log(typeof d);


console.clear();

var toplam = "35" + 10;
console.log(toplam);
console.log(typeof toplam );

console.log("-----------------------------------------------------------------------")

var toplam = Number("35") + 10;
console.log(toplam);
console.log(typeof toplam );




// -----------------------------------------------------------------

console.clear();
var deger;
deger = 3.5;

// Sayıyı en yakın tam sayıya yuvarlar
deger = Math.round(deger);
console.log(deger);


// bir üst sayıya yuvarlama
deger = Math.ceil(deger);
console.log(deger);

// bir alt sayıya yuvarlama
deger = Math.floor(deger);
console.log(deger);



// ----------------------------------------



const programcı = {
    name : "programcı",
    age : 25 ,
    email: "mail@gmail.com",
    langs: ["java" , "python" , "js"],
    
    address : {
        city: "ankara",
        street: "Bahçelievler"
    },

    work : function(){
        console.log("programcı çalışıyor");
    }
};

programcı.work();

var yazdir;
yazdir = programcı.age;
yazdir = programcı.email;
yazdir = programcı.langs[1];
yazdir = programcı.address.city;
yazdir = programcı.address.street;



console.log(yazdir);
console.log(2 == 2);

console.log("b" == "a");

//bir tarafta sayı bir tarafta yazı varsa sayı yazıya çevrilir
console.log(2 == "2");


//3 tane = yapınca hem tipi hemde yazılanı kontrol ediyor böyle kullanmak daha sağlıklıymış
console.log(2 === "2");

console.log(4 > 2);
console.log(4 != 2);


var  not1 = document.getElementById("not1").value;
var  not2 = document.getElementById("not2").value;
var  not3 = document.getElementById("not3").value;
var  not4 = document.getElementById("not4").value;

var toplam =  not1 + not2 + not3 + not4;


var ortalama =  (not1 + not2 + not3 + not4)/4;
// veya
var ortalama2 =  toplam/4;

// console.log(ortalama , ortalama2);


function yazdir(){
    document.getElementById("ort").innerHTML = ortalama;
}