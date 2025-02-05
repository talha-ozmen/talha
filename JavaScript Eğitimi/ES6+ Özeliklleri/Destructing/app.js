// desctructing

// let number1 , number2 , number3;

// arr = [100,200,300,400];

// [number1,number2,number3] = arr;

// console.log(number1 , number2 , number3);


// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50,
// }

// // const {a , c , e} = numbers;

// // console.log(a , c , e);

// const {a:number1 , c:number2 , e:number3} = numbers;

// console.log(number1 , number2 ,number3);

// const getLangs = () => ["javascript" , "phyton" , "c++"];

// const [lang1 , lang2 ,lang3] = getLangs();

// console.log(lang1 , lang2 , lang3);


const person = {
    name: "Talha",
    year: 2025,
    salary: 4000,
    getinfos: () => console.log("bilgiler gösterliyor..."), 
}

const { name: isim , year: yil , salary: maas , getinfos: bilgilerigoster } = person;

console.log(isim , yil , maas );
bilgilerigoster();

