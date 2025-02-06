const person = {
    name: "Talha",
    year: 2025,
    sallary: 4000,

};

const langs = ["Python" , "Java" , "c++" , "Php"];

const name = "Talha";

var sayi = 0;

// for in
for(let prop in person){
    sayi ++;
    console.log(sayi ,prop , person[prop]);
}

console.log("-----");

for (let index in langs){
    console.log(index , langs[index]);
}

console.log("-----");

for(let index in name){
    console.log(index , name[index]);
}

// for of

// // for of da object olunca ÇAlIŞMIYOR
// for(let value of person){
//     console.log(value);
// }


// for of değeri veririr
console.log("");

for(let value of langs){
    console.log(value)
}

console.log("");

for(let value of name){
    console.log(value);
}



// farkı

console.clear();

// burda kaçıncı index olduğunu gösteriyor 
for(let index in name){
    console.log(index);
}

console.log("");

// burda indexin değerini gösteriyor

for (let index of name) {
    if (index === "a" || index === "l") {
        console.log("harf değişti");  // "a" yerine "e" yazdır
    } else {
        console.log(index);  // Diğer karakterleri olduğu gibi yazdır
    }
}
