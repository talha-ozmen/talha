let myMap = new Map();
console.log(myMap);

const key1 = "talha";
const key2 = {a:10 , b:30};
const key3 = () => 2;
// set 
myMap.set(key1,"String Değer");
myMap.set(key2, "Object Literal Değer");
myMap.set(key3 , "Function Değer");
//get
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

// Map Boyutu
console.log(myMap.size);

// 

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

// Foreach ile yazılışı
cities.forEach(function(value,key){
    console.log(key,value) 
});

// Sadece keyleri almak için
for(let key of cities.keys()){
    console.log(key);
}

// Sadece value'leri almak için
for(let value of cities.values()){
    console.log(value);
}

console.log("---------------");

//For ofla yazılı
for(let value of cities){
    console.log(value);
}
for(let [key,value] of cities){
    console.log(key,value);
}

console.clear()
const array = [["key1","value1"],["key2","value2"]];

const lastmap = new Map(array);
console.log(lastmap)

// cities ile örnek 
const test = Array.from(cities);
console.log(test)