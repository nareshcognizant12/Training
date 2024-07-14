//JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.
//different ways of creating an object in JavaScript

//1.create object using object literal
employee={
    id:101,
    name:"naresh",
    salary:26000
}

console.log(employee.id);
console.log(employee.name);
console.log(employee.salary);

//2.By creating instance of Object using new Keyword
let employee2=new Object();
employee2.id=102;
employee2.name="kishore";
employee2.salary=35000;

console.log(employee2.id);
console.log(employee2.name);
console.log(employee2.salary);

//3.By using object Constructor
function employees(id,name,salary){
  this.id=id;
  this.name=name;
  this.salary=salary;
  this.changeSalary=changeSalary;//this is a method
  function changeSalary(amount){this.salary=amount;}
}

emp3=new employees(103,"gopal",45000);
console.log(emp3.id);
console.log(emp3.name);
console.log(emp3.salary);

emp4=new employees(104,"suresh",55000);
console.log(emp4.id);
console.log(emp4.name);
console.log(emp4.salary);
emp4.changeSalary(60000);
console.log(emp4.salary);