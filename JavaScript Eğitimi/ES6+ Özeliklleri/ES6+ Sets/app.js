const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("talha");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1 , b:2});

const mysey2 = new Set([100,3.14,"talha"]);
console.log(myset);

// Size
console.log(myset.size);

// // delete metodu
// myset.delete("talha");

console.log(myset)

// Has Metodu
console.log(myset.has("talha"));
console.log(myset.has(3.14));
console.log(myset.has(2000));
console.log(myset.has([1,2,3]));

//For Each
myset.forEach(function(value) {
    console.log(value);
});

//For OF
for(let value of myset){
    console.log(value);
}

// Array
const array = Array.form(myset);

console.log(array)