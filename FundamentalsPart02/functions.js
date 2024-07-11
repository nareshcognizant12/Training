/*function add(a,b){
    let c=a+b;
    //return c;
    console.log("result:"+c);
}
//console.log("result:"+add(2,3));
// let a=add(6,7);
// console.log("result:"+a);
add(10,20);

//function expression----anonymous function
const add3=function(a,b,c){
    console.log(a+b+c);
};

add3(5,6,7);
//console.log("result after adding 3 numbers:"+result);
console.log(typeof add3);
//console.log(typeof result);*/

//arrow function is a special form of function expression.
const calcAge=birthYear=>2024-birthYear;
const age=calcAge(1999);
console.log(age);