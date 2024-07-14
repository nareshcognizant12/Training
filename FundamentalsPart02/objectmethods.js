employee={
    id:101,
    name:"naresh",
    salary:26000
}

family={
    children:2,
    members:4,
    city:"Banglore"
}
const emp1=Object.assign(employee,{id:102,name:"sandhya",company:"Cognizant"});//replace the value of employee id 101 to 102.

emp1.name="siri";
employee.name="sathya";
const emp2=Object.create(employee);//creates an empty employee object but can access its prototype properties from this object
emp2.company="TCS";
emp1.company="HCL";
console.log(employee);
console.log(emp1);
console.log(emp2);
console.log(emp1.name);

console.log(emp2.company);
console.log(emp2);
console.log(emp2.name);
// const emp5=Object.assign({},employee);
// console.log(emp5.id);
// console.log(emp5.name);
// console.log(emp5.salary);

// const empdetails=Object.assign(family,employee);
// empdetails.name="ganesh";
// console.log(empdetails.children);
// console.log(empdetails.city);
// console.log(empdetails.name);

// //_______________________________________________________________________

// const emp2=Object.create(employee);
// emp2.name="geetha";
// emp2.children=3;
// emp2.city="Hyderabad";
// console.log(emp2.children);
// console.log(emp2.city);
// console.log(emp2.name);
// console.log(emp2.id);
// console.log(employee.name);
// console.log(employee.city);
// console.log("_______________________________________________________________");
// console.log(employee);
// console.log(emp5);
// console.log(empdetails);
// console.log(emp2);
