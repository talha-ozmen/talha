function Employee(name , age){
    this.name = name;
    this.age = age;


    // bu şekilde bellekte 2 kere yer kaplıyor
    // this.showInfos = function(){
    //     console.log("İsim: " + this.name + "yaş: " + this.age);
    // }

    Employee.prototype.showInfos = function(){
        console.log("İsim: " + this.name + "Yaş: " + this.age);
    }
}
const emp1 = new Employee("talha",25);
const emp2 = new Employee("ahmet",25);

console.log(emp1);
console.log(emp2);