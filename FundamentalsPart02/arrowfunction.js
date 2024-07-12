const add=(a,b)=>a+b;
console.log(add(5,6));

const print=()=>console.log("This is an arrow function");
print();

const yearsUntilRetirement=(birthYear)=>{
    const age=2037-birthYear;
    const retirement=65-age;
    return retirement;
};
console.log(yearsUntilRetirement(1999));