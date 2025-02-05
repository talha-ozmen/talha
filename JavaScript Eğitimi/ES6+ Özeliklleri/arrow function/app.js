const merhaba = function(){ 
    console.log("merhaba") 
} 
const merhaba2 = () => { 
    console.log("merhabaa2") 
} 
 // burdaki 2 kodda aynı işi yapıyor
merhaba(); 
merhaba2();

const isim = (firstname) => {
    console.log("Merhaba",firstname)
}
isim("talha");

const cube = (x) => {
    return x * x * x;
}

console.log(cube(4));

// --------------

const arr = [100,200,300];
[number1,number2] = arr; // burdaki kod arr`ın içindeki 0. ve 1. değerlerini alır

console.log(number1,number2);