// console.log(window); // console.log(this);  // aynı kod

// const emp1 = {
//     name: "talha",
//     age: 25,
//     ShowInfos:function() {console.log("Bilgiler Kontrol Ediliyor");}
// }

// const emp2 = {
//     name: "ahmet",
//     age: 25,
// }

// emp1.salary = 4000;
// emp1.ShowInfos();

// console.log(emp1);


function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.ShowInfos = function(){
        console.log(this.name , this.age , this.salary);
    }
}
const emp1 = new Employee("talha" , 25 , 4000);
const emp2 = new Employee("ahmet" , 25 , 5000);

emp1.ShowInfos();
emp2.ShowInfos();
