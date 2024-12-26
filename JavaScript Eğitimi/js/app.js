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




// consta 1 kere aynı satırda tanımlanması gerekiyor
const a = 10; // doğrusu
// const b; //yanlışı
// b = 20;
console.log(a);

// ama
const c = [1, 2, 3, 4, 5]
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
console.log(typeof toplam);

console.log("-----------------------------------------------------------------------")

var toplam = Number("35") + 10;
console.log(toplam);
console.log(typeof toplam);




// ------------------------------------------

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
    name: "programcı",
    age: 25,
    email: "mail@gmail.com",
    langs: ["java", "python", "js"],

    address: {
        city: "ankara",
        street: "Bahçelievler"
    },

    work: function () {
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



//yaptığım




// veya
var ortalama2 = toplam / 4;

var button = document.getElementById("calc");
button.addEventListener('click', function () {
    var not1 = Number(document.getElementById("not1").value);
    var not2 = Number(document.getElementById("not2").value);
    var not3 = Number(document.getElementById("not3").value);
    var not4 = Number(document.getElementById("not4").value);
    var toplam = not1 + not2 + not3 + not4;


    var ortalama = (not1 + not2 + not3 + not4) / 4;

    document.getElementById("ort").innerHTML = ortalama;
    console.log(ortalama)
});







// // doğrusu
// var button = document.getElementById("calc");
// button.addEventListener('click', function () {
//     // Get the current values of the inputs when the button is clicked
//     var not1 = Number(document.getElementById("not1").value);
//     var not2 = Number(document.getElementById("not2").value);
//     var not3 = Number(document.getElementById("not3").value);
//     var not4 = Number(document.getElementById("not4").value);

//     // Calculate the total and average
//     var toplam = not1 + not2 + not3 + not4;
//     var ortalama = toplam / 4;

//     // Display the average
//     document.getElementById("ort").innerHTML = ortalama;
// });


function insan(adi, yasi) {
    console.log(`isim: ${adi}  yaşı: ${yasi}`);
}

insan("t", 25);

//-----------------------------------------------------

var karecevap

function kare(x) {
    karecevap = x * x;
}

var karesias;

function kareal() {
    karesias = Number(document.getElementById("kare-al").value);
    kare(karesias);
    document.getElementById("karesinin-cevabı").innerHTML = karecevap;
}

console.clear();


var rastgelesayi = Math.random() * 100;

var yuvarlanmıssayi = Math.round(rastgelesayi);

console.log(yuvarlanmıssayi)

var tahmini;

function sayibulmaoyunu(){
    tahmini = Number(document.getElementById("sayibulma").value);

    if(yuvarlanmıssayi == tahmini){
        document.getElementById("kutlama").innerHTML = "doğru bildiniz";
    }
   else{
        document.getElementById("kutlama").innerHTML ="cevap " + tahmini + " değil tekrar deneyiniz";
    }

}

