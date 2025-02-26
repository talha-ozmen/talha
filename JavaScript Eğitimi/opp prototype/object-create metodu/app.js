// const obj = {
//     test1: function(){
//         console.log("test1");
//     },
//     test2: function(){
//         console.log("test2");
//     }
// }

// // console.log(obj);

// const emp = Object.create(obj);

// console.log(emp)

// ---------------------

function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test 1");
}
Person.prototype.test2 = function(){
    console.log("Test 2");
}

function Employee(name , age){
    this.name = name;
    this.year = year;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.myTest = function(){
    console.log("MyTest");
}

const emp = new Employee("talha",2025);

console.log(emp);