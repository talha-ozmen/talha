function Employee(name , age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("Bilgiler Gösteriliyor");
    }
    this.tostring = function(){
        console.log("Bu Bir Employee Objesidir");
    }
}

const emp1 = new Employee("talha",25);
console.log(emp1);

console.log(emp1.tostring());