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


const database = {
    host: "localhost",
    add: function () {
        console.log("eklendi");
    },
    get: function () {
        console.log("elde edildi")
    },
    update: function () {
        console.log(`id: ${id} "güncellendi`);
    },
    delete: function () {
        console.log(`${id} silindi`);
    }
}

console.log(database.update)


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

function sayibulmaoyunu(EminMi) {
    tahmini = Number(document.getElementById("sayibulma").value);


    const eminmisin = confirm(tahmini + " tahmininde emin misin");
    if (eminmisin == true) {
        console.log("Eminmiş")
    }
    else {
        console.log(tahmini + " Tahmininde emin Değilmiş");
        return EminMi;
    }


    if (yuvarlanmıssayi == tahmini) {
        document.getElementById("kutlama").innerHTML = "doğru bildiniz";
        document.getElementById("kutlama").style.color = "green";
    }
    else if (yuvarlanmıssayi >= tahmini) {
        document.getElementById("kutlama").innerHTML = "tutuğum sayı " + tahmini + " değil daha büyük";
        document.getElementById("kutlama").style.color = "#c6941f";
    }
    else if (yuvarlanmıssayi <= tahmini) {
        document.getElementById("kutlama").innerHTML = "tutuğum sayı " + tahmini + " değil daha küçük";
        document.getElementById("kutlama").style.color = "red";
    }
    else {
        document.getElementById("kutlama").innerHTML = "cevap " + tahmini + " değil benim tutuğum sayıya çok uzak";
        document.getElementById("kutlama").style.color = "red";
    }

}




console.log("--------------------------------------------");

console.log(window);


var ekranyukseligi;

ekranyukseligi = window.outerHeight;

console.log(ekranyukseligi);

// const toplama = prompt("2 + 2 = ?");

// // promptun tipi string olarak dönüyor eğer aşağıdaki gibi 3 eşitir
// // ile yapınca tipleride kontrolettiği için cevap yanlıştır çalışacaktır

// // if (toplama === 4){
// //     console.log("cevabınız doğru")
// // }

// if (toplama == 4){
//     console.log("cevabınız doğru")
// }
// else{
//     console.log("cevabınız yanlış")
// }



var hostadi = window.location.host;

console.log(hostadi);
/*
const sayfayenilemsinmi = window.confirm("sayfa yenilensin mi");

if(sayfayenilemsinmi == true){
    const sayfayenile = window.location.reload();
}
else{
    console.log("sayfa yenilenmedi")
}
*/


/*

window.addEventListener('scroll', function () {
  const animasyonOge = document.querySelector('.indust-boxs');

  const windowHeight = window.innerHeight; // Görünür ekranın yüksekliği
  const elementTop = animasyonOge.getBoundingClientRect().top; // Öğenin üst kenarının mesafesi

  if (elementTop < windowHeight) {
      animasyonOge.classList.add('a'); // Öğeyi görünür hale getir
  }
});

*/



// !!!
// DOMContentLoaded html yüklenince çalışır
// window.onload html css resimler hepsinin yüklenmesini bekler

document.addEventListener("DOMContentLoaded", function () {
    var activeCategory = "*";

    // Kategorilere tıklandığında
    var categoryItems = document.querySelectorAll(".blog-cat-area p");
    categoryItems.forEach(function (category) {
        category.addEventListener("click", function () {
            activeCategory = category.getAttribute("data-cat");

            // Tıklanan öğeye sarı renk ekle ve diğerlerini kaldır
            category.classList.add('color-yellow');
            categoryItems.forEach(function (sibling) {
                if (sibling !== category) {
                    sibling.classList.remove("color-yellow");
                }
            });

            filterResults();
        });
    });

    // Arama kutusuna yazıldığında
    var searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keyup', function () {
        filterResults();
    });

    function filterResults() {
        var searchValue = searchInput.value.toLowerCase();

        var resultItems = document.querySelectorAll(".result-item");
        resultItems.forEach(function (item) {
            var itemCategory = item.getAttribute("data-cat");
            var itemText = item.querySelector("h3").textContent.toLowerCase();

            if ((activeCategory === "*" || itemCategory === activeCategory) && itemText.includes(searchValue))
            {
                item.style.display = "block";
            }
            else
            {
                item.style.display = "none";
            }
        });
    }
});


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

function todoEkleme(){

}

let todoLi = document.querySelector(".list-group")



// results.forEach(function (result) {
//     var name = result.getAttribute('data-name').toLowerCase();
//     if (name.includes(query)) {
//         result.classList.remove('hidden');  // Diğer öğelerden 'active' sınıfını kaldıralım
//     } else {
//         result.classList.add('hidden');  // 'active' sınıfını sadece eşleşen öğeye ekleyelim
//     }
// });