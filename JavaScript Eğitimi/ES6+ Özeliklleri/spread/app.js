// const langs = ["Python" , "c++" , "Java" , "Php"];

// console.log(langs[0],langs[1],langs[2],langs[3]);

// console.log("---------------")

// console.log(...langs);

// // const langs2 = ["Javascript" , "c#" , langs[0] , langs[1] , langs[2] , langs[3]];

// const langs2 = ["Javascript" , "c#" , ...langs];
// console.log(langs2);

// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b , ...numbers2] = numbers; // a ve b ilk 2. değeri alır numbers2 yeni bir arraylist olur ve diğer bütün değerleri içine alır

// console.log(a,b);
// console.log(numbers2);

const addnumbers = (a,b,c) => console.log(a+b+c);

const numbers3 = [100,200,300];

addnumbers(...numbers3);
