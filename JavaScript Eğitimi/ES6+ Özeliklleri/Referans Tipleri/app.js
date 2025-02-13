let a = "talha";
let b = "talha";

if( a === b){
    console.log("eşit");
}

// arrayler'de eşit değil

let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

if(array1 === array2){
    console.log("eşit")
}

// obje'de eşit değil

const person1 = {
    name: "talha",
    year: 2025
}

const person2 = {
    name: "talha",
    year: 2025
}

if(person1 === person2){
    console.log("eşit")
}

// map'lerde böyle yapınca eşit değil

const cities = new Map();

cities.set("İstanbul" , 15);
cities.set("Ankara" , 5);
cities.set([1,2,3] , "array");

console.log(cities.get("Ankara"));
console.log("------")
console.log(cities.get([1,2,3]) );

// böyle yapınca oluyor

const cities2 = new Map();
const key = [1,2,3];

cities2.set("İstanbul" , 15);
cities2.set("Ankara" , 5);
cities2.set(key , "array");

console.log(cities2.get(key));
